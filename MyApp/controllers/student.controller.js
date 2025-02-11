const Student = require ("../models/student.models.js");

// Get all students
const getAllStudents = async (req, res) => {
    try {
        const student = await Student.find({});
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Get students by ID
const getStudentByID = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Create new students
const createStudent = async (req, res) => {
    try {
        const student = await Student.create(req.body);
        res.status(200).json(student);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
  };

  // Update student by ID
const updateStudentByID = async (req, res) => {
    try {
        const course = await Student.findByIdAndUpdate (req.params.id, req.body);
        res.status(200).json(course);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
};

// Delete student by ID
const deleteStudentByID = async (req, res) => {
    try {
        const course = await Student.findByIdAndDelete (req.params.id);
        res.status(200).json(course);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
};


  module.exports = {
    getAllStudents,
    getStudentByID,
    createStudent,
    updateStudentByID,
    deleteStudentByID
};

