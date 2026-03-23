const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  name: String,
  service: String,
  date: String,
  time: String,
  phone: String
});

module.exports = mongoose.model("Booking", bookingSchema);