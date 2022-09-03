const nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
         user: 'yoyommmut@gmail.com',
         pass: 'qkuktfvpfqfigens'
     }
 });

    // Create a SMTP transporter object
    // let transporter = nodemailer.createTransport({
    //     host: 'smtp.mailtrap.io',
    //     port:  25 ,
    //     auth: {
    //         user: '68131526ec2211',
    //         pass: '2f18c2b3c04ba2'
    //     }
    // });

    module.exports = async function(email,username,msg,link,verificationToken){

    // Message object
    let message = {
        from: 'yoyommmut@gmail.com',
        to: email,
        subject: msg,
        text: msg+'Click Here!' + `${link}`,
        html: `<h3>${msg} <a href=\`${link}\`>Click Here!</a></h3>`
    };

    const mail = await transporter.sendMail(message);
console.log(verificationToken);
    return mail;
     



    }