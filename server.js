const express = require('express')
const app = express()
const port = 3001
const cors = require('cors')
const bodyParser = require('body-parser');
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

app.get('/test', (req, res) => {
console.log('you hit the test congrats!');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
