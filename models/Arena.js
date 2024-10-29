const mongoose = require("mongoose");
const { Schema } = mongoose;

const ArenaSchema = new Schema({
  arena_id: {
    type: String,
    required: true,
    default: () => new mongoose.Types.ObjectId().toString(),
  },
  name: { type: String, required: true },
  location: { type: String, required: true },
  capacity: { type: Number, required: true },
  description: { type: String, required: true },
  availability: { type: String },
  image_url: { type: String },
  pricing_model: { type: String },
  price: { type: Number },
});

const Arena = mongoose.model("Arena", ArenaSchema);
module.exports = Arena;
