// backend/server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";
import nodemailer from "nodemailer";
import process from "process";

dotenv.config();

const app = express();

// CORS for your frontend
app.use(
  cors({
    origin: ["https://deved.onrender.com", "http://localhost:5173"],
  })
);

app.use(express.json({ limit: "10mb" }));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { success: false, message: "Too many requests. Try again later." },
  standardHeaders: true,
  legacyHeaders: false,
});

app.use("/send-email", limiter);

app.get("/", (req, res) => {
  res.json({
    status: "API running",
    endpoint: "/send-email (POST)",
    time: new Date().toISOString(),
  });
});

app.get("/test", (req, res) => {
  res.json({ message: "Test route working!" });
});

app.post("/send-email", async (req, res) => {
  console.log("Received POST to /send-email:", req.body);

  const { name, email, message } = req.body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    console.log("Validation failed: missing fields");
    return res
      .status(400)
      .json({ success: false, message: "All fields required." });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    console.log("Validation failed: invalid email");
    return res.status(400).json({ success: false, message: "Invalid email." });
  }

  try {
    const transporter = nodemailer.createTransporter({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name.trim()}" <${email}>`,
      sender: email,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: `Website Inquiry via Portfolio: ${name.trim()} sent a message`,
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Message from ${name}</title>
  <style>
    * { box-sizing: border-box; }
    body { margin: 0; padding: 0; background: #0f0f0f; font-family: 'Inter', system-ui, -apple-system, sans-serif; color: #c1c1c1; }
    .container { max-width: 600px; margin: 32px auto; background: #1d1e21; border: 1px solid #28292cb6; border-radius: 16px; overflow: hidden; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5); }
    .header { background: #161719; padding: 28px 24px; text-align: center; border-bottom: 1px solid #28292cb6; }
    .header h1 { margin: 0; color: #c1c1c1; font-size: 22px; font-weight: 600; letter-spacing: -0.5px; }
    .body { padding: 32px; color: #c1c1c1; }
    .field { margin-bottom: 20px; }
    .label { color: #aaaaaa; font-size: 13px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px; }
    .value { color: #c1c1c1; font-size: 16px; word-break: break-all; line-height: 1.5; }
    .value a { color: #c1c1c1; text-decoration: underline; text-decoration-thickness: 1px; }
    .message-box { background: #161719; padding: 20px; border-radius: 12px; border-left: 4px solid #c1c1c1; margin: 24px 0; }
    .message { margin: 0; color: #c1c1c1; line-height: 1.7; font-size: 15px; }
    .reply-btn { display: inline-block; margin-top: 24px; padding: 12px 24px; background: #c1c1c1; color: #1d1e21 !important; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px; transition: all 0.2s ease; }
    .footer { background: #161719; padding: 20px; text-align: center; font-size: 12px; color: #6c717e; border-top: 1px solid #28292cb6; }
    .footer a { color: #aaaaaa; text-decoration: none; }
    @media (max-width: 640px) { .container { margin: 16px; border-radius: 12px; } .body { padding: 24px; } .header { padding: 24px 20px; } }
  </style>
</head>
<body>
  <div class="container">
    <div class="header"><h1>Inquiry</h1></div>
    <div class="body">
      <div class="field"><div class="label">From:</div><div class="value"><strong>${name.trim()}</strong></div></div>
      <div class="field"><div class="label">Email:</div><div class="value"><a href="mailto:${email}">${email}</a></div></div>
      <div class="field"><div class="label">Message:</div><div class="message-box"><p class="message">${message.replace(
        /\n/g,
        "<br>"
      )}</p></div></div>
      <a href="mailto:${email}" class="reply-btn">Reply to ${
        name.split(" ")[0]
      }</a>
    </div>
    <div class="footer">
      <p>Copyright © 2022-2025 Edmark Tuazon. All rights reserved.</p>
      <p style="margin-top: 8px;">Sent from <a href="https://deved.onrender.com/">DevelopedByEd</a></p>
    </div>
  </div>
</body>
</html>
      `.trim(),
    });

    console.log("Email sent successfully to:", process.env.EMAIL_USER);
    res.json({
      success: true,
      message:
        "Thanks for reaching out and your message was successfully sent!",
    });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
});

// Render.com port (dynamic)
const PORT = process.env.PORT || 10000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`API running on port ${PORT}`);
  console.log("Available endpoints:");
  console.log("- GET / (health check)");
  console.log("- POST /send-email (contact form)");
});
