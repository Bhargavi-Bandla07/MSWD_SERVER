const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    studentId: String,
    name: String,
    branch: String,
    year: Number
});

module.exports = mongoose.model('Student', studentSchema);
