const express = require('express');
const router = express.Router();
const studentController = require('../Controllers/studentController');
const facultyController = require('../Controllers/facultyController');
const courseController = require('../Controllers/courseController');

// Student routes
router.post('/students', studentController.registerStudent);

// Faculty routes
router.post('/faculty', facultyController.registerFaculty);

// Course routes
router.post('/courses', courseController.registerCourse);

module.exports = router;

