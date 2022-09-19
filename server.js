const express = require('express')
const app = express()
const port = 3000

app.get('/reviews', (req, res) => {
  res.send('Hello World!')
})

app.get('/reviews/meta', (req, res) => {
  res.send('Hello World!')
})

app.post('/reviews', (req, res) => {
  res.send('Hello World!')
})

// app.put('/reviews/???', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})