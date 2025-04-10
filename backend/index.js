const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
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
    <p>Thanks for contacting me! I’ve received your message and will get back to you shortly.</p>
    <p><strong>Your Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>
    <hr />
    <p style="font-size: 12px; color: #888;">This is an automatic confirmation from my portfolio website.</p>
  `;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  try {
    // 1. Send to you
    await transporter.sendMail({
      from: `"Portfolio Website" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_USER,
      subject: `📬 New Contact Form Submission from ${name}`,
      html: adminEmailHTML,
    });

    // 2. Confirmation to user
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

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
