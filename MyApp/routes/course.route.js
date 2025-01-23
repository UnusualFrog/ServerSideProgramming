const express = require("express");
const courseRouter = express.Router ();

const {getCourses, getCouseById, getCouseByName, getAllCoursesByName, insertCourse, updateCourseByName, updateCourseByID, updateAllCoursesByName,
    updateAllCourses, deleteCourseByName, deleteCourseByID, deleteAllCourseByName, deleteAllCourses} =
    require ("../controllers/course.controller.js");

courseRouter.get ('/', getCourses);
courseRouter.get ('/id=:id', getCouseById);
courseRouter.get ('/name=:name', getCouseByName);
courseRouter.get ('/nameAll=:name', getAllCoursesByName);
courseRouter.post ('/', insertCourse);
courseRouter.put ('/name=:name', updateCourseByName);
courseRouter.put ('/id=:id', updateCourseByID);
courseRouter.put ('/nameAll=:name', updateAllCoursesByName);
courseRouter.put ('/', updateAllCourses);
courseRouter.delete ('/name=:name', deleteCourseByName);
courseRouter.delete ('/id=:id', deleteCourseByID);
courseRouter.delete ('/nameAll=:name', deleteAllCourseByName);
courseRouter.delete ('', deleteAllCourses);

module.exports = courseRouter;