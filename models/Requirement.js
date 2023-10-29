const mongoose = require('mongoose');

const requirementSchema = new mongoose.Schema({
  priority: String,
  dateOfPosting: Date,
  itemCat: String,
  item: String,
  unit: String,
  budget: Number,
});

const Requirement = mongoose.model('Requirement', requirementSchema);

module.exports = Requirement;
