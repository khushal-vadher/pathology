const nodemailer  = require('nodemailer');

//admin can send mail to any user's using call this function and pass the email address of the user
function Mail() {
    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.MAIL,
            pass: process.env.MAILPASS
        },
    },
    );
    var mailOptions = {
        from: {
            name: 'Khushal',
            email: process.env.MAIL
        },
        to: req.body.email,
        subject: 'Registration Successfull at Tournion!',
        text: 'Congratulation!! Registration Successful',
        html: `<p>Your Reoport :</p>`,
        attachments : [
          {
            filename:'report.pdf',
          path:'https://mysy.guj.nic.in/Noticeboard/FAQs.pdf'        }
        ]
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent to :');
        }
    });
};

module.exports = Mail;