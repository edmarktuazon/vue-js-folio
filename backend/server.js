import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";
import nodemailer from "nodemailer";
import process from "process";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// For __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());

// Rate limit (5 requests per 15 minutes)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { success: false, message: "Too many requests. Try again later." },
});
app.use("/send-email", limiter);

// API Route
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  // Validation
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res
      .status(400)
      .json({ success: false, message: "All fields required." });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, message: "Invalid email." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      sender: email,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: `Website Inquiry via Portfolio: ${name.trim()} sent a message`,
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>New Message from ${name}</title>
  <style>
    body { background: #0f0f0f; font-family: 'Inter', system-ui, sans-serif; color: #c1c1c1; margin:0; padding:0;}
    .container { max-width:600px; margin:32px auto; background:#1d1e21; border:1px solid #28292cb6; border-radius:16px; overflow:hidden;}
    .header { background:#161719; padding:28px 24px; text-align:center; border-bottom:1px solid #28292cb6; }
    .body { padding:32px; }
    .label { color:#aaaaaa; font-size:13px; text-transform:uppercase; margin-bottom:6px; }
    .value { color:#c1c1c1; font-size:16px; }
    .message-box { background:#161719; padding:20px; border-left:4px solid #c1c1c1; border-radius:12px; margin:24px 0; }
    .reply-btn { display:inline-block; padding:12px 24px; background:#c1c1c1; color:#1d1e21 !important; text-decoration:none; border-radius:8px; font-weight:600; }
    .footer { background:#161719; padding:20px; text-align:center; font-size:12px; color:#6c717e; border-top:1px solid #28292cb6; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header"><h1>Inquiry</h1></div>
    <div class="body">
      <div><div class="label">From:</div><div class="value"><strong>${name.trim()}</strong></div></div>
      <div><div class="label">Email:</div><div class="value"><a href="mailto:${email}">${email}</a></div></div>
      <div><div class="label">Message:</div><div class="message-box"><p>${message.replace(
        /\n/g,
        "<br>"
      )}</p></div></div>
      <a href="mailto:${email}" class="reply-btn">Reply to ${
        name.split(" ")[0]
      }</a>
    </div>
    <div class="footer">
      <p>Copyright © 2022-2025 Edmark Tuazon. All rights reserved.</p>
      <p>Sent from <a href="/">DevelopedByEd</a></p>
    </div>
  </div>
</body>
</html>
      `.trim(),
    });

    res.json({
      success: true,
      message:
        "Thanks for reaching out and your message was successfully sent!",
    });
  } catch (error) {
    console.error("Email error:", error.message, error.stack);
    res.status(500).json({ success: false, message: "Failed to send." });
  }
});

// // Serve frontend (Vite build output) - Commented out since no frontend folder
// app.use(express.static(path.join(__dirname, "../../dist")));
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../../dist/index.html"));
// });

// Health Check
app.get("/", (req, res) => res.json({ status: "API running" }));

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
