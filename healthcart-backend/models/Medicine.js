const mongoose = require("mongoose");

const medicineSchema = new mongoose.Schema({
  _id: String, // custom id
  name: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  available: { type: Boolean, default: true },
  pharmacy: {
    name: String,
    address: String,
    hours: String,
  },
});

module.exports = mongoose.model("Medicine", medicineSchema);
