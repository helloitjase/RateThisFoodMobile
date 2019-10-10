const { Pool, Client } = require('pg');
const Promise = require('bluebird');
const config = require('./postgresConfig.js');

const pool = new Pool(config);

pool.connect()
  .then(() => {
    console.log('we be swimming in the pool');
  })
  .catch((err) => {
    console.log('Error', err);
  });

const matcha = ['https://rate-this-food.s3-us-west-1.amazonaws.com/desserts/matcha-soft-serve/matcha1.jpg', ' https://rate-this-food.s3-us-west-1.amazonaws.com/desserts/matcha-soft-serve/matcha2.jpg', 'https://rate-this-food.s3-us-west-1.amazonaws.com/desserts/matcha-soft-serve/Matcha3.jpg', 'https://rate-this-food.s3-us-west-1.amazonaws.com/desserts/matcha-soft-serve/somisomimatcha.jpg', 'https://rate-this-food.s3-us-west-1.amazonaws.com/desserts/matcha-soft-serve/matcha+soft+serve+stonemill+matcha.jpg', 'https://rate-this-food.s3-us-west-1.amazonaws.com/desserts/matcha-soft-serve/matchamaiko.jpg'];

const generateReviewsData = () => {
  const insert = 'INSERT INTO reviews(food_id, user_id, image, rating, cost, date, restaurant, review) VALUES($1, $2, $3, $4, $5, $6, $7, $8)'
  const reviews = [
    [
      food_id: 1,
      user_id: 1,
      image: matcha[0],
      rating: 4,
      Cost: 5,
      Date: '2018-09-30',
      Restaurant: 'Tea Master Matcha Cafe & Green Tea Shop',
      Review: 'Much yum, Cheap',
    ],
    [
      food_id: 1,
      user_id: 2,
      image: matcha[1],
      rating: 5,
      Cost: 9,
      Date: '2019-06-17',
      Restaurant: "Nana's Green Tea",
      Review: 'This was a great place for a first date! 10/10 would recommend!',
    ],
    [
      food_id: 1,
      user_id: 3,
      image: matcha[2],
      rating: 1,
      Cost: 1,
      Date: '2019-09-29',
      Restaurant: 'Amausaan Uji Matcha',
      Review: 'Yums Yums in my Tums Tums',
    ],
    [
      food_id: 1,
      user_id: 4,
      image: matcha[3],
      rating: 0,
      Cost: 2.5,
      Date: '2019-09-02',
      Restaurant: 'Somi Somi',
      Review: '0 stars, this was not refined enough for my palate',
    ],
    [
      food_id: 1,
      user_id: 5,
      image: matcha[4],
      rating: 3,
      Cost: 5,
      Date: '2019-09-15',
      Restaurant: 'Stonemill Matcha',
      Review: "Pretty good, however I don't know why they called me Johnnifer?!?!",
    ],
    [
      food_id: 1,
      user_id: 6,
      image: matcha[5],
      rating: 5,
      Cost: 15,
      Date: '2019-09-01',
      Restaurant: 'Matcha Cafe Maiko',
      Review: 'Was pretty good, would take the wife here.',
    ],
    [
      food_id: 1,
      user_id: 7,
      image: matcha[6],
      rating: 5,
      Cost: 5,
      Date: '2019-10-01',
      Restaurant: 'Fangs',
      Review: "Matcha Soft serve?!?! There wasn't any soft serve here?!?!? The food was bomb though.",
    ],
    [
      food_id: 1,
      user_id: 8,
      image: null,
      rating: 5,
      Cost: 0,
      Date: '2019-08-15',
      Restaurant: 'Doggo Tinder',
      Review: 'Came here for the doggos, ended up playing TFT instead. Doggos and TFT are both free so, winning!',
    ],
    [
      food_id: 1,
      user_id: 9,
      image: null,
      rating: 5,
      Cost: 5,
      Date: '2016-02-01',
      Restaurant: 'Beard Papas',
      Review: 'Not sure if there was actually soft serve here but cream puffs are great! That structural integrity was astounding.',
    ],
    [
      food_id: 1,
      user_id: 10,
      image: null,
      rating: 0,
      Cost: 40,
      Date: '2019-09-14',
      Restaurant: 'Hack Reactor',
      Review: "What is this place?!?!?! They don't sell soft serve here, they only taught me to code... what a waste of my time.",
    ],
    [
      food_id: 1,
      user_id: 11,
      image: null,
      rating: 5,
      Cost: 2,
      Date: '2019-08-18',
      Restaurant: 'Hack Reactor',
      Review: 'Came here to learn to code, got soft serve once I think? Maybe?',
    ],
  ];
  const query = ()

};
