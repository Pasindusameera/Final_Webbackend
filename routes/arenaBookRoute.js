const express = require("express");
const {
  GetCustomerBookings,
  GetCustomerPendingBookings,
  UpdatePendingBookings,
} = require("../controllers/arenaController");

const router = express.Router();

router.get("/getBookings", GetCustomerBookings);

router.get("/pendings", GetCustomerPendingBookings);

router.put("/bookings/update", UpdatePendingBookings);

module.exports = router;
