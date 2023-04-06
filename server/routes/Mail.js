const express = require('express')
const router = express.Router()
// const {Mail} = require("../controller/Mail.js")
const nodemailer  = require('nodemailer');


//POST MAIL

router.post("/send", async(req,res)=>{
    console.log("Trying to send mail :")
    console.log(req.body.email)
    try {
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
  
      await transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
              console.log(error);
          } else {
              console.log('Email sent');
              return res.status(200).json({
                  msg: 'Email sent '
              });
          }
          // res.json(info)
      });
      
    } catch (error) {
      console.log(error)
    }
})

module.exports = router;