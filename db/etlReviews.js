const fs = require('fs');
const { parse } = require('csv-parse');
const { Reviews } = require('./models.js')
const sequelize = require('./sequelize')

//Karrissa Volce's way
const createConnection = () => {
  return Promise.resolve(sequelize);
}

const load = async () => {
  await createConnection();
  await Reviews.sync({ force: true })

  const parser = fs.createReadStream(__dirname + "../data/reviews.csv")
  .pipe(
    parse({
      skip_records_with_error: true,
      columns: true,
    })
  );

  for await (const row of parser) {
    await Reviews.bulkCreate({
      id: parseInt(row.id),
      product_id: parseInt(row.product_id),
      rating: parseInt(row.rating),
      summary: row.summary,
      recommended: row.recommended === 'true' ? true : false,
      response: row.response !== 'null' ? row.response : null,
      body: row.body,
      date: new Date(parseInt(row.date))
        .toLocaleDateString("sv")
        .replace(/\//g, "-"),
      helpfulness: parseInt(row.helpfulness),
      photos: [],
      reported: row.reported === "true" ? true : false,
      reviewer_name: row.reviewer_name,
      reviewer_email: row.reviewer_email
    })
  }
}
