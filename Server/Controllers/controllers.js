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

const addReview = async (reviewId) => {
  //
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