const Course = require ("../models/course.models.js");

// GET
// Get all courses
const getCourses = async (req, res) => {
    try {
        const courses = await Course.find ({});
        res.status(200).json(courses);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
};

// Get course by id
const getCouseById = async (req, res) => {
    try {
        const course = await Course.findById (req.params.id);
        res.status(200).json(course);
    }
    catch (err) {
        console.log(req.params.id)
        res.status(500).json({ message: err.message});
    }
};

// Get first course by name
const getCouseByName = async (req, res) => {
    try {
        const course = await Course.findOne ({courseName:req.params.name});
        res.status(200).json(course);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
};

// Get all records by name
const getAllCoursesByName = async (req, res) => {
  try {
      const courses = await Course.find ({courseName:req.params.name});
      res.status(200).json(courses);
  }
  catch (err) {
      res.status(500).json({ message: err.message});
  }
};

// POST 
// Create new course
const insertCourse = async (req, res) => {
    try {
        const sched = await Course.create(req.body);
        res.status(200).json(sched);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// UPDATE
// Update first course by name
const updateCourseByName = async (req, res) => {
    try {
        const course = await Course.findOneAndUpdate ({courseName:req.params.name}, req.body);
        res.status(200).json(course);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
};

// Update course by ID
const updateCourseByID = async (req, res) => {
    try {
        const course = await Course.findByIdAndUpdate (req.params.id, req.body);
        res.status(200).json(course);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
};

// Update all records by Name
const updateAllCoursesByName = async (req, res) => {
    try {
        const courses = await Course.updateMany ({courseName:req.params.name}, req.body);
        res.status(200).json(courses);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
};

// Update all records
const updateAllCourses = async (req, res) => {
    try {
        const courses = await Course.updateMany ({}, req.body);
        res.status(200).json(courses);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
}

// DELETE
// Delete first course by name
const deleteCourseByName = async (req, res) => {
    try {
        const course = await Course.findOneAndDelete ({courseName:req.params.name});
        res.status(200).json(course);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
};

// Delete course by ID
const deleteCourseByID = async (req, res) => {
    try {
        const course = await Course.findByIdAndDelete (req.params.id);
        res.status(200).json(course);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
};

// Delete All course by Name
 const deleteAllCourseByName = async (req, res) => {
    try {
        const courses = await Course.deleteMany ({courseName:req.params.name});
        res.status(200).json(courses);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
 };

// Delete All courses
const deleteAllCourses = async (req, res) => {
    try {
        const courses = await Course.deleteMany ({});
        res.status(200).json(courses);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
};

// EXPORT
module.exports = {
    getCourses,
    getCouseById,
    getCouseByName,
    getAllCoursesByName,
    insertCourse,
    updateCourseByName,
    updateCourseByID,
    updateAllCoursesByName,
    updateAllCourses,
    deleteCourseByName,
    deleteCourseByID,
    deleteAllCourseByName,
    deleteAllCourses
};