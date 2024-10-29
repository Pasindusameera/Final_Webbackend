const express = require("express");
const {
  CreateArena,
  GetArenas,
  GetArenaById,
  DeleteArena,
  UpdateArena,
  GetCustomerBookings,
  GetCustomerPendingBookings,
  UpdatePendingBookings,
} = require("../controllers/arenaController");

const router = express.Router();

router.post("/create", CreateArena);

router.get("/", GetArenas);

router.get("/:id", GetArenaById);

router.delete("/:id", DeleteArena);

router.put("/:id", UpdateArena);

router.get("/getBookings", GetCustomerBookings);

router.get("/pendings", GetCustomerPendingBookings);

router.put("/bookings/update", UpdatePendingBookings);

module.exports = router;
