const { Pool, Client } = require('pg');
const config = require('./postgresConfig.js');

const pool = new Pool({ config });

pool.connect()
  .then(() => {
    console.log('we be swimming in the pool');
  });


const getUser = ()  