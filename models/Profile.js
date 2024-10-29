const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  arenaName: String,
  address: String,
  contact: String,
  email: String,
  description: String,
  sports: [
    {
      name: String,
      time: String,
      location: String,
    },
  ],
});

const Profile = mongoose.model("arenaownerProfile", profileSchema);
module.exports = Profile;
