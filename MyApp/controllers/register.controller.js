const Student = require ("../models/student.models.js"); 
const Course = require ("../models/course.models.js");

const registerCourseStudent = async (req, res) => {
    try {
        const course = await Course.findById (req.params.courseID);
        console.log(course.courseName);

        const student = await Student.findById(req.params.studentID);
        console.log(student.firstName)

        course.students.push(student.id)
        course.save()

        student.courses.push(course.id)
        student.save()

        messageSuccess = student.firstName + " Successfully Registered to " + course.courseName;
        messageError = "Failed to Register " + student.firstName + " to " + course.courseName;

        res.status(200).json({message:  messageSuccess});
    } catch (err) {
        res.status(500).json({ message: messageError, error: err.message})
    }
};

module.exports = {
    registerCourseStudent
};