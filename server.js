"use strict";

// modules
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const nodemailer = require("nodemailer");
const port = 3001;

// gen setup
const app = express()
dotenv.config();
// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
res.send('this is the base route')
console.log('this is the base route')
})

app.get('/hello', (req, res) => {
res.send('hello world')
console.log("this is the HELLO route")
})

app.post('/post', (req, res) => {
  console.log(req.body)
  transporter.sendMail(mailOptions,function(err,data){
    if(err){
      console.log(err);
    } else{
      console.log('the email was successfully sent!');
    }
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})





// set up for node nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.USERNAME ,
    pass: process.env.PASSWORD,
  }
})
// set up for mail options
const mailOptions = {
  from: 'newsletbot@gmail.com',
  to: "dharminlive1213@gmail.com",
  subject: 'Welcome',
  text:'it works!!!?',
  html: "<h4>hello this is an h4 tag.</h4>"
}

// set up to actually send the thing.
