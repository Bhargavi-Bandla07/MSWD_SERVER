const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
    facultyId: String,
    name: String,
    designation: String,
    department: String
});

module.exports = mongoose.model('Faculty', facultySchema);
