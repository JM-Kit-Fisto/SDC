const { Sequelize, DataTypes } = require('sequelize');
const models = require('../../db/models.js');
const Reviews = models.Reviews;
const Photos = models.Photos;
const Characteristics = models.Characteristics;
const Characteristics_Reviews = models.Characteristics_Reviews;

const getAll = async () => {
  const allReviews = await Reviews.findAll({
    include: [
    { model: Photos, required: true }
  ], limit: 1});
}

module.exports.getAll = getAll;