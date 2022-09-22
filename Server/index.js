const express = require('express');
const app = express();
const port = 3000;
const { getAllReviews} = require('./Controllers/controllers.js');

app.get('/reviews', (req, res) => {
  getAllReviews(req.query.product_id)
  .then((data) => {
    res.send(data)
  })
  .catch((err) => {

  })
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