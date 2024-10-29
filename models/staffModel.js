const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    address: { type: String, required: true },
    state: { type: String, required: true },
    position: { type: String, required: true },
    wages: { type: Number, required: true },
});

const Staff = mongoose.model('arenaStaff', staffSchema);
module.exports = Staff;
