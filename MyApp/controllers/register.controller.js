const Student = require ("../models/student.models.js"); 
const Course = require ("../models/course.models.js");

const registerCourseStudent = async (req, res) => {
    try {
        // Get objects from params
        const course = await Course.findById (req.params.courseID);
        console.log(course.courseName);

        const student = await Student.findById(req.params.studentID);
        console.log(student.firstName)

        // Check for duplicate entries
        if (course.students.includes(student.id)) {
            throw new Error(course.courseName + " already contains student " + student.firstName)
        }

        if (student.courses.includes(course.id)) {
            throw new Error(student.firstName + " already registered to " + course.courseName)
        }

        // Add relationships and save changes
        course.students.push(student.id)
        course.save()

        student.courses.push(course.id)
        student.save()

        // Response message
        let messageSuccess = student.firstName + " Successfully Registered to " + course.courseName;
        res.status(200).json({message:  messageSuccess});
    } catch (err) {
        res.status(500).json({ message: "Failed to Register Student", error: err.message})
    }
};

const checkConflicts = () => {

}

module.exports = {
    registerCourseStudent
};