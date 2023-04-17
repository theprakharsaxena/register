const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  staffName: {
    type: String,
    required: true,
  },
  countryCode: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: String,
    required: true,
    unique: true,
  },
  selectStore: {
    type: String,
    required: true,
  },
  selectRole: {
    type: String,
    required: true,
  },
});

const Staffdb = mongoose.model("staffdb", schema);

module.exports = Staffdb;
