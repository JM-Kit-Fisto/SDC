const express = require('express')
const app = express()
const port = 3000

app.get('/reviews', (req, res) => {
  connect()
  .then((res) => {

  })
  .catch((err) => {

  })
  res.send('Hello World!')
})

app.get('/reviews/meta', (req, res) => {
  connect()
  .then((res) => {

  })
  .catch((err) => {

  })
})

// app.post('/reviews', (req, res) => {
//   res.send('Hello World!')
// })

// app.put('/reviews/???', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})