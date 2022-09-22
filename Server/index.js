const express = require('express');
const app = express();
const port = 3000;
const { getAllReviews, addReview } = require('./Controllers/controllers.js');

app.use(express.json())

app.get('/reviews', (req, res) => {
  getAllReviews(req.query.product_id)
  .then((data) => {
    res.send(data)
  })
  .catch((err) => {
    console.log(err)
  })
})

app.post('/reviews', (req, res) => {
  addReview(req.body)
  .catch((err) => {
    console.log(err)
  })
  res.sendStatus(201)
})

// app.get('/reviews/meta', (req, res) => {
//   .then((res) => {
//   })
//   .catch((err) => {

//   })
// })


// app.put('/reviews/???', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})