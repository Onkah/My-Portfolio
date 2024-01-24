const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  // Set up nodemailer to send the email
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'onkabetsemorgan@gmail.com',
      pass: 'rhinestone',
    },
  });

  const mailOptions = {
    from: 'onkabetsemorgan@gmail.com',
    to: 'your-email@gmail.com',
    subject: 'New Message from Contact Form',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
