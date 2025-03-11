const express = require('express')
const mongoose = require('mongoose')
const courseRoute = require ("./routes/course.route.js");
const studentRoute = require ("./routes/student.route.js")
const registerRoute = require ("./routes/register.route.js")

const app = express()
// const port = 3000 //Changed for react-client
const port = 3001

// Connect to Cloud DB
mongoose.connect('mongodb+srv://juliaforward:easypass1@home13.vxafn.mongodb.net/?retryWrites=true&w=majority&appName=home13',{ dbName: 'home13'})
    .then(() => {
      console.log("Connected to the database!");
      app.listen(port, () => {
          console.log(`Example app listening on port ${port}`);
      });
    })
    .catch(() => {
      console.log("Failed to connect to the database.");
    });

// Use cors
const cors = require('cors');
app.use(cors());
// Use Express
app.use(express.json());
// Use the courses route for making requests, modify to change url path
app.use ("/api/courses", courseRoute);
app.use ("/api/students", studentRoute);
app.use ("/api/register", registerRoute);

// Chained get request for default get request
app.get('/', (req, res, next) => {
   console.log("test");
   next()
},(req, res)=>{
  res.send('Hello Chained Get Request!')
})



