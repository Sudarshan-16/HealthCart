const mongoose = require("mongoose");

const pharmacySchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: String,
  contact: String,
  opening_hours: String
});

module.exports = mongoose.model("Pharmacy", pharmacySchema);
