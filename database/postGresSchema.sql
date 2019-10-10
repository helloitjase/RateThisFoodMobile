DROP DATABASE IF EXISTS ratethisfood;

CREATE DATABASE ratethisfood;

\connect ratethisfood;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  Uer VARCHAR(25) UNIQUE NOT NULL,
  password TEXT,
  salt TEXT
);

CREATE TABLE foods (
  food_id SERIAL PRIMARY KEY,
  food_name VARCHAR(25) UNIQUE NOT NULL
);

CREATE TABLE reviews (
  food_id INTEGER REFERENCES foods(food_id),
  user_id INTEGER REFERENCES users(user_id),
  image TEXT,
  review TEXT,
  rating NUMERIC(1,1) NOT NULL,
  cost REAL NOT NULL,
  date DATE NOT NULL,
  restaurant varchar(50) NOT NULL
);