import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import nodemailer from "nodemailer";
import process from "process";

console.log("EMAIL_USER:", process.env.EMAIL_USER ? "Loaded" : "MISSING");
console.log(
  "EMAIL_PASS:",
  process.env.EMAIL_PASS ? "Loaded (hidden)" : "MISSING"
);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,
  message: "Too many requests, please try again later.",
});
app.use("/send-email", limiter);

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify SMTP on startup
transporter.verify((err, success) => {
  if (err) {
    console.error("SMTP Error:", err.message);
  } else {
    console.log("SMTP Ready! Can send emails.");
  }
});

app.get("/", (req, res) => {
  res.send("Backend OK! Running on Render.");
});

app.post("/send-email", async (req, res) => {
  const { name, email, message, type, honeypot } = req.body;

  if (honeypot) {
    return res.json({ success: false, message: "Spam detected." });
  }

  if (!name || !email || !message) {
    return res.json({ success: false, message: "Fill all fields." });
  }

  const subject =
    type === "quote"
      ? `Quote Request from ${name}`
      : `Project Idea from ${name}`;

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New ${type === "quote" ? "Quote Request" : "Project Idea"}</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background: #1d1e21;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      color: #c1c1c1;
    }
    .container {
      max-width: 600px;
      margin: 30px auto;
      background: #161719;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 12px 32px rgba(0,0,0,0.3);
      border: 1px solid #28292cb6;
    }
    .header {
      background: linear-gradient(135deg, #1d1e21, #161719);
      padding: 28px;
      text-align: center;
      border-bottom: 1px solid #28292cb6;
    }
    .header h1 {
      margin: 0;
      font-size: 22px;
      font-weight: 600;
      color: #ffffff;
    }
    .header p {
      margin: 8px 0 0;
      font-size: 14px;
      color: #aaaaaa;
    }
    .content {
      padding: 32px;
    }
    .label {
      font-weight: 600;
      color: #c1c1c1;
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 8px;
    }
    .value {
      background: #1d1e21;
      padding: 14px 18px;
      border-radius: 10px;
      border-left: 4px solid #c1c1c1;
      margin-bottom: 20px;
      font-size: 16px;
      line-height: 1.6;
      color: #ffffff;
      font-family: inherit;
      white-space: pre-wrap;
      word-wrap: break-word;
    }
    .footer {
      background: #1d1e21;
      color: #6c717e;
      text-align: center;
      padding: 20px;
      font-size: 12px;
      border-top: 1px solid #28292cb6;
    }
    .footer a {
      color: #c1c1c1;
      text-decoration: none;
    }
    .btn {
      display: inline-block;
      background: #c1c1c1;
      color: #1d1e21 !important;
      padding: 12px 32px;
      border-radius: 10px;
      text-decoration: none;
      font-weight: 600;
      margin: 20px 0;
      font-size: 15px;
      transition: all 0.2s;
    }
    .btn:hover {
      background: #ffffff;
      transform: translateY(-1px);
    }
    .type-badge {
      display: inline-block;
      padding: 6px 16px;
      border-radius: 50px;
      font-size: 12px;
      font-weight: 600;
      margin-bottom: 20px;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      border: 1px solid;
    }
    .type-quote {
      background: rgba(34, 197, 94, 0.15);
      color: #86efac;
      border-color: #22c55e;
    }
    .type-project {
      background: rgba(251, 191, 36, 0.15);
      color: #fbbf24;
      border-color: #f59e0b;
    }
  </style>
</head>
<body>
  <div class="container">
    <!-- Header -->
    <div class="header">
      <h1>New Submission</h1>
      <p>${
        type === "quote" ? "Quote Request" : "Project Idea"
      } from your portfolio</p>
    </div>

    <!-- Content -->
    <div class="content">
      <div class="type-badge ${
        type === "quote" ? "type-quote" : "type-project"
      }">
        ${type === "quote" ? "Quote Request" : "Project Idea"}
      </div>

      <div class="label">Name</div>
      <div class="value">${name}</div>

      <div class="label">Email</div>
      <div class="value">
        <a href="mailto:${email}" style="color:#c1c1c1;text-decoration:none;">${email}</a>
      </div>

      <div class="label">Message</div>
      <div class="value">${message.replace(/\n/g, "<br>")}</div>

      <div style="text-align:center;">
        <a href="mailto:${email}?subject=Re: ${encodeURIComponent(
    subject
  )}" class="btn">
          Reply to ${name.split(" ")[0]}
        </a>
      </div>

      <p style="color:#aaaaaa;font-size:14px;margin-top:28px;text-align:center;">
        Sent via your portfolio contact form
      </p>
    </div>

    <!-- Footer -->
    <div class="footer">
      <p>Copyright ©2022-2025 <a href="https://deved.onrender.com/">DevelopedByEd</a></p>
    </div>
  </div>
</body>
</html>
`;

  try {
    await transporter.sendMail({
      from: `"Portfolio" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject,
      html,
    });

    res.json({
      success: true,
      message:
        "Got your message! I’ll get back to you at the earliest opportunity.",
    });
  } catch (error) {
    console.error("Send Error:", error.message);
    res.json({ success: false, message: "Failed to send. Try again." });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
