const express = require("express");
const studentRouter = express.Router ();

const {createStudent, getAllStudents, getStudentByID, updateStudentByID, deleteStudentByID} = require("../controllers/student.controller.js");

studentRouter.get("/", getAllStudents);
studentRouter.get("/id=:id", getStudentByID);
studentRouter.post("/", createStudent);
studentRouter.put("/id=:id", updateStudentByID);
studentRouter.delete("/id=:id", deleteStudentByID);


module.exports = studentRouter;