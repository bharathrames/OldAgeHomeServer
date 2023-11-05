const mongoose = require('mongoose');

const requirementSchema = new mongoose.Schema({
  homeName: String,
  homeDescription: String, 
  priority: String,
  dateOfPosting: Date,
  itemCat: String,
  item: String,
  unit: String,
  SKU: String,
  budget: Number,
  contact: String,
  address: String,
  bankDetails: {
    bankName: String,
    accountNo: String,
    ifscCode: String,
    branchName: String,
  },
});

const Requirement = mongoose.model('Requirement', requirementSchema);

module.exports = Requirement;
