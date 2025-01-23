const express = require('express')
const mongoose = require('mongoose')
const courseRoute = require ("./routes/course.route.js");
// const Course = require('./models/course.models.js')

const app = express()
const port = 3000

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

const cors = require('cors');
app.use(cors());

app.use(express.json());
app.use ("/api/courses", courseRoute);

// Chained get request
app.get('/', (req, res, next) => {
   console.log("test");
   next()
},(req, res)=>{
  res.send('Hello Chain!')
})
