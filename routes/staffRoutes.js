// routes/staffRoutes.js
const express = require('express');
const { getStaff, addStaff, updateStaff, deleteStaff } = require('../controllers/staffController');

const router = express.Router();

// Get all staff members
router.get('/', getStaff);

// Add a new staff member
router.post('/', addStaff);

// Update a staff member by ID
router.put('/:id', updateStaff);

// Delete a staff member by ID
router.delete('/:id', deleteStaff);

module.exports = router;
