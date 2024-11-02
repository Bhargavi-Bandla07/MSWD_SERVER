const Faculty = require('../Models/faculty');

exports.registerFaculty = async (req, res) => {
    try {
        const { facultyId, name, designation, department } = req.body;
        const newFaculty = new Faculty({ facultyId, name, designation, department });
        await newFaculty.save();
        res.status(201).json(newFaculty);
    } catch (err) {
        res.status(500).json({ message: 'Error registering faculty', err });
    }
};
