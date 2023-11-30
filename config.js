const { default: mongoose } = require('mongoose');

require('dotenv').config();

const config = {
  port: process.env.PORT || 3001,
  mongodbUri: process.env.MONGODB_URI,
};

mongoose.connect(config.mongodbUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');

  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error.message);
  });

module.exports = config;
