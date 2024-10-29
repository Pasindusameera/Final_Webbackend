// controllers/staffController.js
const Staff = require('../models/staffModel');

// Get all staff members
exports.getStaff = async (req, res) => {
    try {
        const staff = await Staff.find();
        res.json(staff);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add a new staff member
exports.addStaff = async (req, res) => {
    const newStaff = new Staff(req.body);
    try {
        const savedStaff = await newStaff.save();
        res.status(201).json(savedStaff);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a staff member by ID
exports.updateStaff = async (req, res) => {
    try {
        const updatedStaff = await Staff.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedStaff) {
            return res.status(404).json({ message: 'Staff member not found' });
        }
        res.json(updatedStaff);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a staff member by ID
exports.deleteStaff = async (req, res) => {
    try {
        const deletedStaff = await Staff.findByIdAndDelete(req.params.id);
        if (!deletedStaff) {
            return res.status(404).json({ message: 'Staff member not found' });
        }
        res.json({ message: 'Staff deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
