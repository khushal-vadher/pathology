const nodemailer = require('nodemailer');

const mail =  (req, res) => {

    try {
        // 
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'khushalvadher229@gmail.com',
                pass: process.env.MAILPASS
            }
        });

        // Define the email options
        let mailOptions = {
            from: 'khushalvadher229@gmail.com',
            to: process.env.MAIL,
            subject: 'Hello World!',
            text: 'This is a test email sent from Node.js using Nodemailer.'
        };

        // Send the email
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    }catch(err){
        console.log(err);
    }

}


module.exports = mail;
// const mail = async (req, res) => {
//     const transporter = nodemailer.createTransport({
//         service: "hotmail",
//         auth: {
//             user: "khushalvadher229@gmail.com",
//             pass: process.env.MAILPASS,
//         },
//     });
//     const subject = "app name";
//     const textbody = `Dear {}`;
//     const options = {
//         from: "khushalvadher229@gmail.com",
//         to: "khushalvadher229@outlook.com",
//         subject: {},
//         text: `It's absoulety working!!!`,
//     };

//     transporter.sendMail(options, function (err, info) {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         console.log("Sent: " + info.response);
//     });
// }



// const sender = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: "khushalvadher229@gmail.com",
//         pass: "lrkiywqfexawnaje",
//     }
// });

// const mail = {
//     from: "khushalvadher229@gmail.com",
//     to: "kdvadher1510@gmail.com",
//     subject: "Sending Email using Node.js",
//     text: "That was easy!"
// };

// sender.sendMail(mail).then(()=>{
//     return res.status(201).json({
//         mes :"Hey"
//     })
// });

// module.exports = mail;