const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('./index.js').sequelize;

class Reviews extends Model {}
  Reviews.init({
      review_id : {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      product_id: DataTypes.INTEGER,
      rating: DataTypes.INTEGER,
      review_date: DataTypes.INTEGER,
      summary: DataTypes.STRING(1000),
      body: DataTypes.STRING(1000),
      recommend: DataTypes.BOOLEAN,
      reported: DataTypes.BOOLEAN,
      reviewer_name: DataTypes.STRING(60),
      review_email: DataTypes.STRING(60),
      response: DataTypes.STRING(1000),
      helpfulness: DataTypes.INTEGER
    }, {
      sequelize,
      timestamps: false,
      modelName: 'reviews'
  })

class Photos extends Model {}
  Photos.init({
      photo_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      review_id: DataTypes.INTEGER,
      photo_url: DataTypes.STRING(1000)
    }, {
      sequelize,
      timestamps: false,
      modelName: 'photos'
  })

Reviews.hasMany(Photos)
Photos.belongsTo(Reviews)

class Characteristics extends Model {}
  Characteristics.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    product_id: DataTypes.INTEGER,
    name: DataTypes.STRING(60)
  }, {
    sequelize,
    timestamps: false,
    modelName: 'characteristics'
})

class Characteristics_Reviews extends Model {}
  Characteristics_Reviews.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    characteristic_id: DataTypes.INTEGER,
    review_id: DataTypes.INTEGER,
    value: DataTypes.INTEGER
  }, {
      sequelize,
      timestamps: false,
      modelName: 'characteristic_reviews'
  })

  Characteristics.hasMany(Characteristics_Reviews)
  Characteristics_Reviews.belongsTo(Characteristics)

module.exports.Reviews = Reviews;
module.exports.Photos = Photos;
module.exports.Characteristics = Characteristics;
module.exports.Characteristics_Reviews = Characteristics_Reviews;