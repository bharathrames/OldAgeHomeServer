require('dotenv').config();

const config = {
  port: process.env.PORT || 3001,
  mongodbUri: process.env.MONGODB_URI,
};

module.exports = config;
