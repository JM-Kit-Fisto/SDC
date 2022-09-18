CREATE TABLE products (
  product_id int PRIMARY KEY,
  product_name varchar(60)
);

CREATE TABLE reviews (
  review_id int PRIMARY KEY,
  product_id int
  CONSTRAINT fk_product_id
    FOREIGN KEY(product_id)
      REFERENCES products(product_id),
  rating int,
  review_date int,
  summary varchar(60),
  body varchar(1000),
  recommend boolean,
  reported boolean,
  reviewer_name varchar(60),
  review_email varchar(60),
  response varchar(1000),
  helpfulness int
);

CREATE TABLE photos (
  photo_id int PRIMARY KEY,
  review_id int
  CONSTRAINT fk_photo_review_id
    FOREIGN KEY(review_id)
      REFERENCES reviews(review_id),
  photo_url varchar(255),
);

-- CREATE TABLE metaData (
--   product_id int PRIMARY KEY,
--   ratings
--   recommend
--   characteristics
-- );

-- CREATE TABLE ratings (
--   1_star int,
--   2_star int,
--   3_star int,
--   4_star int,
--   5_star int
--   product_id int,
--   CONSTRAINT fk_product_id_ratings
--     FOREIGN KEY(product_id)
--       REFERENCES products(product_id)
-- );

-- CREATE TABLE characteristics (
--   char_id int PRIMARY KEY,
--   char_name varchar(60),

-- );

-- CREATE TABLE recommend (
--   review_id PRIMARY KEY
--   true int,
--   false int
-- )