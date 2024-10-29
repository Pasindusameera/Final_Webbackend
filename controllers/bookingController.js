const Booking = require("../models/Booking");

// Add booking function
const addBooking = async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    const savedBooking = await newBooking.save();
    res.status(201).json(savedBooking);
  } catch (error) {
    console.error("Error saving booking", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get bookings by date function
const getBookingsByDate = async (req, res) => {
  const { date } = req.query;
  try {
    const bookings = await Booking.find({
      date: {
        $gte: new Date(date),
        $lt: new Date(new Date(date).setDate(new Date(date).getDate() + 1)),
      },
    });
    res.status(200).json(bookings);
  } catch (error) {
    console.error("Error fetching bookings", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { addBooking, getBookingsByDate };
