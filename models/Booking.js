const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  sport: { type: String, required: true },
  time: { type: String, required: true },
  userName: { type: String, required: true },
});

const Booking = mongoose.model("arenaownerBooking", bookingSchema);
module.exports = Booking;
