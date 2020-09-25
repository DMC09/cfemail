"use strict";
// imports
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const nodemailer = require("nodemailer");
const port = 3001;
const fs = require('fs');


// gen setup | middleware
const app = express()
dotenv.config();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cors())


// base route
app.get('/', (req, res) => {
res.send('this is the base route')
console.log('this is the base route')
})

// post route
app.post('/post', (req, res) => {
  console.log(req.body)
  // set up for node nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.USERNAME ,
      pass: process.env.PASSWORD,
    }
  })
  // set up for mail options
  fs.readFile('./email.html', {encoding: 'utf-8'}, function (err, html) {
   if (err) {
     console.log(err);
   } else {
     let mailOptions = {
       from: 'newsletbot@gmail.com',
       to: req.body.email,
       subject: 'Sending Html in node mailer',
       html: html
     };
  transporter.sendMail(mailOptions,(err,data)=> err ? console.log(err): console.log(`sent`))

   }
  });

console.log('message was sent!');
})




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
