const express = require('express')
const app = express()
const port = 3001

app.get('/test', (req, res) => {
  res.send('Hello World!')
})

app.get('/testplan', (req, res) => {
console.log('hellooo Wrold');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
