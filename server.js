"use strict";

// modules
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const nodemailer = require("nodemailer");
const port = process.env.PORT ;

// gen setup
const app = express()
dotenv.config();

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
  subject: 'test',
  text:'it works!!!?'
}

// set up to actually send the thing.
transporter.sendMail(mailOptions,function(err,data){
  if(err){
    console.log(err);
  } else{
    console.log('the email was successfully sent!');
  }
})
// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cors())




app.get('/', (req, res) => {
  console.log('home page!')
   res.json({ username: 'xdcx' })
})

app.post('/post', (req, res) => {
  console.log(req.body)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`)
})
