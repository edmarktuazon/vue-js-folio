import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import nodemailer from "nodemailer";
import process from "process";

console.log(
  "BREVO_SMTP_LOGIN:",
  process.env.BREVO_SMTP_LOGIN ? "Loaded" : "MISSING"
);
console.log(
  "BREVO_SMTP_KEY:",
  process.env.BREVO_SMTP_KEY ? "Loaded (hidden)" : "MISSING"
);
console.log("SENDER_EMAIL:", process.env.SENDER_EMAIL ? "Loaded" : "MISSING");

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = [
  "https://deved.onrender.com",
  "http://localhost:5173",
  "http://localhost:3000",
  "http://localhost:5000",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.log("Blocked origin:", origin);
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST"],
    credentials: true,
  })
);

// Limit request body size to prevent abuse via huge payloads
app.use(express.json({ limit: "10kb" }));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: "Too many requests, please try again later.",
});

app.set("trust proxy", 1);
app.use("/send-email", limiter);

// Brevo SMTP
const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.BREVO_SMTP_LOGIN,
    pass: process.env.BREVO_SMTP_KEY,
  },
});

transporter.verify((err) => {
  if (err) {
    console.error("SMTP Connection Failed:", err.message);
  } else {
    console.log("SMTP Connected! Ready to send emails.");
  }
});

// Form validation)
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

app.get("/", (req, res) => {
  res.send("Backend OK! Running on Render.");
});

app.get("/health", (req, res) => {
  res.json({ status: "OK", message: "Backend is alive!" });
});

app.post("/send-email", async (req, res) => {
  const { name, email, message, type, honeypot } = req.body;

  if (honeypot) {
    console.log("Spam attempt blocked (honeypot filled)");
    return res.json({ success: false, message: "Spam detected." });
  }

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ success: false, message: "Fill all fields." });
  }

  if (typeof email !== "string" || !EMAIL_REGEX.test(email.trim())) {
    return res
      .status(400)
      .json({ success: false, message: "Please enter a valid email address." });
  }

  if (
    typeof name !== "string" ||
    name.trim().length === 0 ||
    name.length > 100
  ) {
    return res
      .status(400)
      .json({ success: false, message: "Please enter a valid name." });
  }

  if (
    typeof message !== "string" ||
    message.trim().length === 0 ||
    message.length > 5000
  ) {
    return res.status(400).json({
      success: false,
      message: "Message must be between 1 and 5000 characters.",
    });
  }

  // Only allow known values
  const safeType = type === "quote" ? "quote" : "project";

  const subject =
    safeType === "quote"
      ? `Quote Request from ${name}`
      : `Project Idea from ${name}`;

  const currentYear = new Date().getFullYear();
  const PORTFOLIO_URL = "https://deved.onrender.com";

  // Escape all user-controlled values
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New ${safeType === "quote" ? "Quote Request" : "Project Idea"}</title>
  <style>
    body { margin:0; padding:0; background:#1d1e21; font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif; color:#c1c1c1; }
    .container { max-width:600px; margin:30px auto; background:#161719; border-radius:16px; overflow:hidden; box-shadow:0 12px 32px rgba(0,0,0,0.3); border:1px solid #28292cb6; }
    .header { background:linear-gradient(135deg,#1d1e21,#161719); padding:28px; text-align:center; border-bottom:1px solid #28292cb6; }
    .header h1 { margin:0; font-size:22px; font-weight:600; color:#fff; }
    .header p { margin:8px 0 0; font-size:14px; color:#aaaaaa; }
    .content { padding:32px; }
    .label { font-weight:600; color:#c1c1c1; font-size:13px; text-transform:uppercase; letter-spacing:1px; margin-bottom:8px; }
    .value { background:#1d1e21; padding:14px 18px; border-radius:10px; border-left:4px solid #c1c1c1; margin-bottom:20px; font-size:16px; line-height:1.6; color:#fff; white-space:pre-wrap; word-wrap:break-word; }
    .footer { background:#1d1e21; color:#6c717e; text-align:center; padding:20px; font-size:12px; border-top:1px solid #28292cb6; }
    .footer a { color:#c1c1c1; text-decoration:none; }
    .btn { display:inline-block; background:#c1c1c1; color:#1d1e21 !important; padding:12px 32px; border-radius:10px; text-decoration:none; font-weight:600; margin:20px 0; font-size:15px; }
    .type-badge { display:inline-block; padding:6px 16px; border-radius:50px; font-size:12px; font-weight:600; margin-bottom:20px; text-transform:uppercase; letter-spacing:0.8px; border:1px solid; }
    .type-quote { background:rgba(34,197,94,0.15); color:#86efac; border-color:#22c55e; }
    .type-project { background:rgba(251,191,36,0.15); color:#fbbf24; border-color:#f59e0b; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Submission</h1>
      <p>${
        safeType === "quote" ? "Quote Request" : "Project Idea"
      } from your portfolio</p>
    </div>
    <div class="content">
      <div class="type-badge ${
        safeType === "quote" ? "type-quote" : "type-project"
      }">
        ${safeType === "quote" ? "Quote Request" : "Project Idea"}
      </div>
      <div class="label">Name</div><div class="value">${safeName}</div>
      <div class="label">Email</div><div class="value"><a href="mailto:${safeEmail}" style="color:#c1c1c1;text-decoration:none;">${safeEmail}</a></div>
      <div class="label">Message</div><div class="value">${safeMessage}</div>
      <div style="text-align:center;">
        <a href="mailto:${safeEmail}?subject=Re: ${encodeURIComponent(
    subject
  )}" class="btn">
          Reply to ${safeName.split(" ")[0]}
        </a>
      </div>
      <p style="color:#aaaaaa;font-size:14px;margin-top:28px;text-align:center;">
        Sent via your portfolio contact form
      </p>
    </div>
    <div class="footer">
      <p>© ${currentYear} <a href="${PORTFOLIO_URL}">DevelopedByEd</a></p>
    </div>
  </div>
</body>
</html>
`;

  try {
    await transporter.sendMail({
      from: `"Portfolio" <${process.env.SENDER_EMAIL}>`,
      to: process.env.SENDER_EMAIL,
      replyTo: email,
      subject,
      html,
    });

    console.log(
      `Email sent successfully to ${process.env.SENDER_EMAIL} from ${email}`
    );
    res.json({
      success: true,
      message:
        "Got your message! I'll get back to you at the earliest opportunity.",
    });
  } catch (error) {
    console.error("Send Error:", error.message);
    console.error("Full Error Object:", error);
    res.status(500).json({
      success: false,
      message: "Failed to send. Please try again later.",
    });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Allowed origins:`, allowedOrigins);
});
