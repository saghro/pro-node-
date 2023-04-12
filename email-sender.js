const nodemailer = require('nodemailer');

// create transporter with your email provider's SMTP settings
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ayoubgmail.com',
        pass: '........'
    }
});

// configure email details
const mailOptions = {
    from: 'ayoubsagh@gmail.com',
    to: 'saghro@edu.uiz.ac.ma',
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