const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sdc', 'postgres', 'SDCpassword', {
  host: 'localhost',
  dialect: 'postgres'
});

sequelize.authenticate()
.then(() => {
  console.log('sequalizeion has been established successfully.');
})
.catch ((error) => {
  console.error('Unable to sequalize to the database:', error);
})

module.exports.sequelize = sequelize;