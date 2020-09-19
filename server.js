// modules
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const port = process.env.PORT ;

// gen setup
const app = express()
dotenv.config();

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
