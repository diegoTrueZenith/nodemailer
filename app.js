const nodemailer = require('nodemailer');

const html = `
    <h1> Hello World </h1>
    <p> This is a mesaage from NodeMailer </p>
`;

// Create a transporter using the default SMTP transport
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'espinosa9mx@gmail.com', // Enter your Gmail address
    pass: 'bjitvhpzvvipwisy' // Enter your Gmail password or app-specific password
  }
});

// Define the email message
let mailOptions = {
  from: 'espinosa9mx@gmail.com', // Sender address
  to: 'diego@truezenithcreative.com', // List of recipients
  subject: 'Hello from Node.js', // Subject line
  html: html,
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
