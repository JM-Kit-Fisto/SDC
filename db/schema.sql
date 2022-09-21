CREATE TABLE reviews (
  review_id int PRIMARY KEY,
  product_id int,
  rating int,
  review_date bigint,
  summary varchar(1000),
  body varchar(1000),
  recommend boolean,
  reported boolean,
  reviewer_name varchar(60),
  review_email varchar(60),
  response varchar(1000),
  helpfulness int
);

copy reviews (review_id, product_id, rating, review_date, summary, body, recommend, reported, reviewer_name, review_email, response, helpfulness) from '/tmp/data/reviews.csv' delimiter ',' csv header;

CREATE TABLE photos (
  photo_id int PRIMARY KEY,
  review_id int,
  photo_url varchar(255)
);

copy photos (photo_id, review_id, photo_url) from '/tmp/data/reviews_photos.csv' delimiter ',' csv header;


CREATE TABLE characteristics (
  id int PRIMARY KEY,
  product_id int,
  name varchar(60)
);

copy characteristics (id, product_id, name) from '/tmp/data/characteristics.csv' delimiter ',' csv header;

CREATE TABLE characteristic_reviews (
  id int PRIMARY KEY,
  characteristic_id int,
  review_id int,
  value int
);

copy characteristic_reviews (id, characteristic_id, review_id, value) from '/tmp/data/characteristic_reviews.csv' delimiter ',' csv header;