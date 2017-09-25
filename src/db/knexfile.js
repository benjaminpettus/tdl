// Update with your config settings.
require('dotenv').config({path: '../../.env'})

module.exports = {
    client: 'pg',
    connection: process.env.DB_HOST,
    migrations: {
      directory: 'migrations'
    },
    seeds: {
      directory: 'seeds'
    }
};
