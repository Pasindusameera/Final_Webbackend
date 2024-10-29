const Arena = require("../models/Arena");
const ArenaBookings = require("../models/ArenaBookings");

const CreateArena = async (req, res, next) => {
  try {
    const {
      name,
      location,
      capacity,
      description,
      availability,
      image_url,
      pricing_model,
      price,
    } = req.body;

    // Basic validation
    if (
      !name ||
      !location ||
      !capacity ||
      !description ||
      !availability ||
      !pricing_model ||
      !price
    ) {
      return res
        .status(400)
        .json({ message: "All required fields must be provided." });
    }

    const arena = new Arena({
      name,
      location,
      capacity,
      description,
      availability,
      image_url,
      pricing_model,
      price,
    });

    const result = await arena.save();
    return res.status(201).json(result);
  } catch (error) {
    console.error("Error creating arena:", error);
    return res.status(400).json({ message: "Failed to create arena", error });
  }
};

const GetArenas = async (req, res, next) => {
  try {
    const arenas = await Arena.find();
    return res.status(200).json(arenas);
  } catch (error) {
    console.error("Error fetching arenas:", error);
    return res.status(400).json({ message: "Failed to fetch arenas", error });
  }
};

const GetArenaById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const arena = await Arena.findById(id);
    return res.status(200).json(arena);
  } catch (error) {
    console.error("Error fetching arena:", error);
    return res.status(400).json({ message: "Failed to fetch arena", error });
  }
};

const DeleteArena = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Arena.findByIdAndDelete(id);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Error deleting arena:", error);
    return res.status(400).json({ message: "Failed to delete arena", error });
  }
};

const UpdateArena = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      name,
      location,
      capacity,
      description,
      availability,
      image_url,
      pricing_model,
      price,
    } = req.body;

    const result = await Arena.findByIdAndUpdate(
      id,
      {
        name,
        location,
        capacity,
        description,
        availability,
        image_url,
        pricing_model,
        price,
      },
      { new: true }
    );
    return res.status(200).json(result);
  } catch (error) {
    console.error("Error updating arena:", error);
    return res.status(400).json({ message: "Failed to update arena", error });
  }
};

const GetCustomerBookings = async (req, res, next) => {
  try {
    const bookings = await ArenaBookings.find();

    return res.status(200).json(bookings);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return res
      .status(500)
      .json({ message: "An error occurred while fetching bookings." });
  }
};

const GetCustomerPendingBookings = async (req, res, next) => {
  try {
    const bookings = await ArenaBookings.find({
      status: { $in: ["pending"] },
    });

    if (bookings.length === 0) {
      return res.status(404).json({ message: "No bookings found." });
    }

    return res.status(200).json(bookings);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    next(error);
  }
};

const UpdatePendingBookings = async (req, res, next) => {
  const { bookingId, newStatus } = req.body;

  try {
    // Validate the newStatus
    if (!["confirmed", "canceled", "pending"].includes(newStatus)) {
      return res.status(400).json({ message: "Invalid status update." });
    }

    // Find the booking by bookingId and update it
    const updatedBooking = await ArenaBookings.findOneAndUpdate(
      { bookingId: bookingId }, // Search by bookingId
      { status: newStatus }, // Update status
      { new: true } // Return the updated document
    );

    if (!updatedBooking) {
      return res.status(404).json({ message: "Booking not found." });
    }

    return res.status(200).json(updatedBooking);
  } catch (error) {
    console.error("Error updating booking:", error);
    next(error);
  }
};

module.exports = {
  CreateArena,
  GetArenas,
  GetArenaById,
  DeleteArena,
  UpdateArena,
  GetCustomerBookings,
  UpdatePendingBookings,
  GetCustomerPendingBookings,
};
