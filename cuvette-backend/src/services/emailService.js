const nodemailer = require('nodemailer');

// Function to send email verification
const sendVerificationEmail = async (email, token) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Email Verification',
    text: `Please verify your email by clicking on the following link: 
           http://localhost:5000/rest/api/verify-email?token=${token}`,
  };

  await transporter.sendMail(mailOptions);
};

// Function to send job alert emails
const sendJobAlert = async (email, job) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Job Alert',
    text: `Job Title: ${job.title}\nJob Description: ${job.description}`,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = { sendVerificationEmail, sendJobAlert };