const express = require('express')

const app = express()
const port = 3001
const cors = require('cors')

app.use(cors())


app.get('/test', (req, res) => {
  console.log('you hit the test congrats!');
})

app.get('/testplan', (req, res) => {
console.log('hellooo Wrold');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
