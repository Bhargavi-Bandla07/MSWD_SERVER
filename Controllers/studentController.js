const Student = require('../Models/student');

exports.registerStudent = async (req, res) => {
    try {
        const { studentId, name, branch, year } = req.body;
        const newStudent = new Student({ studentId, name, branch, year });
        await newStudent.save();
        res.status(201).json(newStudent);
    } catch (err) {
        res.status(500).json({ message: 'Error registering student', err });
    }
};
