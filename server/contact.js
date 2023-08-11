
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post("/", (req, res) => {
function sendMail() {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'vishvailavelan@gmail.com',
        pass: 'zvvgljdxbdgkgkpi'
      }
    });
  
      function generateEmail() {
          return (req.body.message +"\n\n\nEmail:    " + req.body.email +"\nName:   "  + req.body.firstname + " " + req.body.lastname);
      }
  
    let mailOptions =  {
      from: 'vishvailavelan@gmail.com',
      to: 'vishvailavelan@gmail.com',
      subject: 'Webiste Contact Message, From ' + req.body.firstname + " " + req.body.lastname,
      text: generateEmail()
    };
  
   return transporter.sendMail(mailOptions);
    }

    try{
        sendMail();
        res.json({emailResult: true}) 
    } catch (error) {
        sendMail();
        res.json({emailResult: false}) 
    }

});

module.exports = router;