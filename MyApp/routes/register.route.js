const express = require("express");
const registerRouter = express.Router ();

const {registerCourseStudent} =
    require ("../controllers/register.controller.js");

registerRouter.put ('/courseName=:courseName/schoolID=:schoolID', registerCourseStudent);


module.exports = registerRouter;