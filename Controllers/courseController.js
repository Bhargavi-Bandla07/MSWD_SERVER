const Course = require('../Models/course');

exports.registerCourse = async (req, res) => {
    try {
        const { courseId, courseName, credits, department } = req.body;
        const newCourse = new Course({ courseId, courseName, credits, department });
        await newCourse.save();
        res.status(201).json(newCourse);
    } catch (err) {
        res.status(500).json({ message: 'Error registering course', err });
    }
};
