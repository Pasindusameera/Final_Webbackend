const express = require("express");
const { addBooking, getBookingsByDate } = require("../controllers/bookingController");
const router = express.Router();

router.post("/", addBooking);
router.get("/", getBookingsByDate);

module.exports = router;
