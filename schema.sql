CREATE TABLE products (
  product_id int PRIMARY KEY,
  product_name varchar(60)
);

CREATE TABLE reviews (
  review_id int PRIMARY KEY,
  rating int,
  summary varchar(60),
  recommend boolean,
  response varchar(1000),
  body varchar(1000),
  review_date date,
  reviewer_name varchar(60),
  helpfulness int,
  product_id int,
  CONSTRAINT fk_products_review_id
    FOREIGN KEY(product_id)
      REFERENCES products(product_id)
);

CREATE TABLE photos (
  photo_id int PRIMARY KEY,
  photo_url varchar(255),
  review_id int,
  CONSTRAINT fk_photo_review_id
    FOREIGN KEY(review_id)
      REFERENCES products(review_id)
);

CREATE TABLE metaData (
  product_id int PRIMARY KEY,
  ratings
  recommend
  characteristics
);

CREATE TABLE ratings (
  1_star int,
  2_star int,
  3_star int,
  4_star int,
  5_star int
);

CREATE TABLE characteristics (
  char_id int PRIMARY KEY,
  char_name varchar(60),
  char_value
);

CREATE TABLE recommend (
  review_id PRIMARY KEY
  true int,
  false int
)