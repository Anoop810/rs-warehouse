const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Rate limiting
const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5,
  message: { success: false, error: 'Too many requests. Please try again later.' },
});
app.use('/api/contact', limiter);

// Serve frontend
app.use(express.static(path.join(__dirname, 'frontendbuild')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontendbuild', 'index.html'));
});

// Contact form route
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !subject || !message)
    return res.status(400).json({ success: false, error: 'Missing fields' });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email))
    return res.status(400).json({ success: false, error: 'Invalid email' });

  if (message.length < 10)
    return res.status(400).json({ success: false, error: 'Message too short' });

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_USER,
      subject: `📬 New Message from ${name}`,
      html: `
        <h3>Contact Submission</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone || "N/A"}</p>
        <p><b>Subject:</b> ${subject}</p>
        <p><b>Message:</b><br>${message.replace(/\n/g, "<br>")}</p>
      `
    });

    await transporter.sendMail({
      from: `"R.S WareHouse" <${process.env.MAIL_USER}>`,
      to: email,
      subject: `Thanks for contacting me, ${name}!`,
      html: `
        <p>Hey ${name},</p>
        <p>I’ve received your message and will get back to you soon.</p>
        <hr>
        <p style="color:#888;font-size:12px;">This is an automated email.</p>
      `
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Error sending email:', err);
    res.status(500).json({ success: false, error: 'Failed to send email' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
