const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');
const cors = require('cors');
const app = express();
app.use(cors());

//  middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(config.mongodbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const requirementsRoute = require('./routes/requirements');
app.use('/api/requirements', requirementsRoute);

//server
app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});