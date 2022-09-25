const { Sequelize, DataTypes } = require('sequelize');
const {
  Reviews,
  Photos,
  Characteristics,
  Characteristics_Reviews
} = require('../db/models.js');

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

const getMetaData = async (productId) => {
  //query all reviews for ratings and recommended
  const reviews = await Reviews.findAll({
    where: {
      product_id: productId
    },
    raw: true
  })
  const incrementByOne = (obj, num) => {
    obj[num] += 1;
  }
  //format metadata to FE req
  const formatted = {
    product_id: productId,
    ratings: {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0
    },
    recommended: {
      false: 0,
      true: 0
    },
    characteristics: {
      Fit: {
        id: 1,
        value: ''
      },
      Length: {
        id: 2,
        value: ''
      },
      Comfort: {
        id: 3,
        value: ''
      },
      Quality: {
        id: 4,
        value: ''
      },
    }
  }
  reviews.forEach((review) => {
    switch (review.rating) {
      case 1:
        incrementByOne(formatted.ratings, 1);
        break;
      case 2:
        incrementByOne(formatted.ratings, 2);
        break;
      case 3:
        incrementByOne(formatted.ratings, 3);
        break;
      case 4:
        incrementByOne(formatted.ratings, 4);
        break;
      case 5:
        incrementByOne(formatted.ratings, 5);
        break;
    }
    switch (review.recommend) {
      case true:
        incrementByOne(formatted.recommended, true)
      case false:
        incrementByOne(formatted.recommended, false)
    }
  })
  //query characteristic_reviews per id
  const metaData = await Characteristics.findAll({
    include: [
      { model: Characteristics_Reviews, required: true }
    ],
    where: {
      product_id: productId
    },
    raw: true
  });

  metaData.forEach((characteristic) => {
    formattedChars = formatted.characteristics;
    const value = characteristic['characteristic_reviews.value'];
    formattedChars[characteristic.name].id = characteristic.id;
    formattedChars[characteristic.name].value =+ value;
  })

  return formatted;
}

const addReview = async (userReview) => {
  //add review
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
  //increment metadata

}

const incrementHelpfulness = async (reviewId) => {
  Reviews.increment(['helpfulness'], { where: { review_id: reviewId }})
  .then((res) => {
    console.log('Marked Helpful!')
  })
  .catch((err) => {
    console.log(err)
  })
}

const report = async (reviewId) => {
  Reviews.update({ reported: true }, { where: { review_id: reviewId }})
  .then((res) => {
    console.log('Reported!')
  })
  .catch((err) => {
    console.log(err)
  })
}

module.exports.getAllReviews = getAllReviews;
module.exports.getMetaData = getMetaData;
module.exports.addReview = addReview;
module.exports.incrementHelpfulness = incrementHelpfulness;
module.exports.report = report;