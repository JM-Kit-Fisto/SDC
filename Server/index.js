const express = require('express');
const app = express();
const port = 3000;
const {
  getAllReviews,
  addReview,
  incrementHelpfulness,
  report
 } = require('./controllers.js');

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

// app.get('/reviews/meta', (req, res) => {

//   .then((res) => {

//   })
//   .catch((err) => {

//   })
// })

app.post('/reviews', (req, res) => {
  addReview(req.body)
  .then(() => {
    res.sendStatus(201)
  })
  .catch((err) => {
    console.log(err)
  })
})

app.put('/reviews/:review_id/helpful', (req, res) => {
  incrementHelpfulness(req.params.review_id)
  .then(() => {
    res.sendStatus(204)
  })
  .catch((err) => {
    console.log(err)
  })
})

app.put('/reviews/:review_id/report', (req, res) => {
  report(req.params.review_id)
  .then(() => {
    res.sendStatus(204)
  })
  .catch((err) => {
    console.log(err)
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})