const express = require("express");
const registerRouter = express.Router ();

const {registerCourseStudent} =
    require ("../controllers/register.controller.js");

registerRouter.put ('/courseID=:courseID/studentID=:studentID', registerCourseStudent);


module.exports = registerRouter;