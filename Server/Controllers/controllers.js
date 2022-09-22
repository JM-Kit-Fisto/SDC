const { Sequelize, DataTypes } = require('sequelize');
const models = require('../../db/models.js');
const Reviews = models.Reviews;
const Photos = models.Photos;
const Characteristics = models.Characteristics;
const Characteristics_Reviews = models.Characteristics_Reviews;

const getAllReviews = async (productId) => {
  const allReviews = await Reviews.findAll({
    include: [
      { model: Photos, required: true }
    ],
    where: {
      product_id: productId
    },
    raw: true
  });

  return allReviews;
}

const addReview = async (userReview) => {
  let maxId = await Reviews.findAll({
    attributes: [Sequelize.fn('max', Sequelize.col('review_id'))],
    raw: true,
  });
  maxId = maxId[0].max;
  const newReview = {
    review_id: maxId + 1,
    product_id: userReview.product_id,
    rating: userReview.rating,
    review_date: parseInt(userReview.date),
    summary: userReview.summary,
    body: userReview.body,
    recommend: userReview.recommend,
    reported: false,
    reviewer_name: userReview.name,
    review_email: userReview.email,
    response: null,
    helpfulness: 0
  }
  Reviews.create(newReview)
  .then((res) => {
    console.log('Created!');
  })
  .catch((err) => {
    console.log(err)
  })
}

const incrementHelpfulness = async (reviewId) => {
  //increment
}

const getOneUpdate = async (reviewId) => {
  //update
}

module.exports.getAllReviews = getAllReviews;
module.exports.addReview = addReview;
module.exports.incrementHelpfulness = incrementHelpfulness;
module.exports.getOneUpdate = getOneUpdate;