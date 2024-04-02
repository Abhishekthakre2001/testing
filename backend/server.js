const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: 'gmail',
  port: 587,
  auth: {
    user: 'mailto:billingsoftwaresv@gmail.com',
    pass: 'yxvt cmnu pjwt buch',
  },
});

var mailOptions = {
    from: 'mailto:billingsoftwaresv@gmail.com',
    to: 'mailto:abhishekthakre70@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
