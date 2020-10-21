require('dotenv').config()

module.exports = {
  development: {
    dialect: 'postgres',
    url: process.env.DEV_DATABASE_URL,
    username: 'postgres',
    password: '123456',
    database: 'testdb',
  },
};