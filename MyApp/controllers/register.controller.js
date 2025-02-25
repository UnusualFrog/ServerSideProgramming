const Student = require ("../models/student.models.js"); 
const Course = require ("../models/course.models.js");

const registerCourseStudent = async (req, res) => {
    try {
        // Get objects from params
        // const course = await Course.findById (req.params.courseID);
        const course = await Course.findOne({ courseName: req.params.courseName });
        console.log(course.courseName);

        // const student = await Student.findById(req.params.studentID);
        const student = await Student.findOne({ schoolID: req.params.schoolID });
        console.log(student.firstName)

        // Check for duplicate entries 
        if (course.students.includes(student.id)) {
            throw new Error(course.courseName + " already contains student " + student.firstName)
        }

        if (student.courses.includes(course.id)) {
            throw new Error(student.firstName + " already registered to " + course.courseName)
        }
        
        if(await checkConflicts(student, course) == true) {
            throw new Error("Schedule Conflict :(");
        }
        console.log("Continue past point of end")

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

const checkConflicts = async (student, newCourse) => {
    console.log(student.firstName);
    console.log(newCourse.courseName);

    // Loop through sessions of new course
    for (newCourseSession of newCourse.sessions) {
        console.log("==========================================");
        console.log(newCourseSession);

        // Loop through courses of student
        for (studentCourseID of student.courses) {
            console.log("--------------------------------");
            currentCourse = await Course.findById(studentCourseID);
            console.log(currentCourse.courseName);

            // Loop through sessions of current course
            for (currentCourseSession of currentCourse.sessions) {
                console.log("**************")
                console.log(currentCourseSession)

                if (newCourseSession.day == currentCourseSession.day) {
                    console.log("MATCH DAYS!")

                    let newCourseSessionStart = (Math.floor(newCourseSession.startTime / 100) * 60) + newCourseSession.startTime % 100;
                    let currentCourseSessionStart = (Math.floor(currentCourseSession.startTime / 100) * 60) + currentCourseSession.startTime % 100;
                    console.log(newCourseSessionStart)
                    console.log(currentCourseSessionStart)

                    let newCourseSessionEnd = newCourseSessionStart + newCourseSession.duration;
                    let currentCourseSessionEnd = currentCourseSessionStart + currentCourseSession.duration;
                    console.log(newCourseSessionEnd);
                    console.log(currentCourseSessionEnd);

                    if (newCourseSessionStart == currentCourseSessionStart) {
                        console.log("conflict! same start time");
                        return true;
                    }

                    if (newCourseSessionStart > currentCourseSessionStart  && newCourseSessionStart < currentCourseSessionEnd) {
                        console.log("conflict! new in between start and end of current")
                        return true;
                    }

                    if ( currentCourseSessionStart > newCourseSessionStart && currentCourseSessionStart < newCourseSessionEnd) {
                        console.log("conflict! current in between start and end of new")
                        return true;
                    }
                }
            }
        }
    }
    return false;
}

module.exports = {
    registerCourseStudent
};