const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    courseId: String,
    courseName: String,
    credits: Number,
    department: String
});

module.exports = mongoose.model('Course', courseSchema);
