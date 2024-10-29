const mongoose = require("mongoose");
const { Schema } = mongoose;

const ArenaBookingSchema = new Schema(
  {
    bookingId: {
      type: String,
      required: true,
      default: () => new mongoose.Types.ObjectId().toString(),
    },
    arenaId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Arena",
      required: true,
    },
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
    bookingDate: { type: Date, required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    status: { type: String, required: true },
    totalCost: { type: Number, required: true },
  },
  { timestamps: true }
);

const ArenaBookings = mongoose.model("ArenaBooking", ArenaBookingSchema);
module.exports = ArenaBookings;
