const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');
const ratelimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Remove specific origin since we're serving from same server
app.use(express.json());
// Rate limiter
const contactLimiter = ratelimit({
  windowMs: 60 * 1000, // 1 minute
  max: 5, // limit each IP to 5 requests per windowMs
  message: { success: false, error: "Too many requests. Please try again later." }
});
app.use('/api/contact', contactLimiter);

// API Route
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  const adminEmailHTML = `
    <h3>New Contact Form Submission</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone || "N/A"}</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, "<br>")}</p>
  `;

  const confirmationEmailHTML = `
    <p>Hi ${name},</p>
    <p>Thanks for contacting me! I've received your message and will get back to you shortly.</p>
    <p><strong>Your Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>
    <hr />
    <p style="font-size: 12px; color: #888;">This is an automatic confirmation from my portfolio website.</p>
  `;
// Basic field validation
if (!name || !email || !subject || !message) {
  return res.status(400).json({ success: false, error: 'Please fill in all required fields.' });
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
  return res.status(400).json({ success: false, error: 'Invalid email address.' });
}

if (message.length < 10) {
  return res.status(400).json({ success: false, error: 'Message should be at least 10 characters.' });
}

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio Website" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_USER,
      subject: `📬 New Contact Form Submission from ${name}`,
      html: adminEmailHTML,
    });

    await transporter.sendMail({
      from: `"R.S WareHouse" <${process.env.MAIL_USER}>`,
      to: email,
      subject: `Thanks for reaching out, ${name}!`,
      html: confirmationEmailHTML,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Email sending error:', err);
    res.status(500).json({ success: false, error: 'Email failed to send.' });
  }
});

// Serve frontend build folder
app.use(express.static(path.join(__dirname, "frontendbuild")));

// Handle all routes by serving index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontendbuild", "index.html"));
});

app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
