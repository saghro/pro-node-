const nodemailer = require('nodemailer');

// create transporter with your email provider's SMTP settings
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ayoubsaghro27@gmail.com',
        pass: 'ayoub1234'
    }
});

// configure email details
const mailOptions = {
    from: 'ayoubsaghro27@gmail.com',
    to: 'ayoub.saghro@edu.uiz.ac.ma',
    subject: 'Test Email',
    html: '<h1>Hello from Node.js!</h1><p>This is a test email sent from Node.js using Nodemailer.</p>'
};

// send email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});