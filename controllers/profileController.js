const Profile = require("../models/Profile");

// Profile function
const createProfile = async (req, res) => {
  try {
    const newProfile = new Profile(req.body);
    const savedProfile = await newProfile.save();
    res.status(201).json(savedProfile);
  } catch (error) {
    console.error("Error saving profile", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { createProfile };
