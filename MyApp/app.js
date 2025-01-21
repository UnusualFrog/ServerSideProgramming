const express = require('express')
const mongoose = require('mongoose')
const birds = require('./birds')
const Course = require('./models/course.models.js')

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

// Chained get request
app.get('/', (req, res, next) => {
   console.log("test");
   next()
},(req, res)=>{
  res.send('Hello Chain!')
})

// Default put request
app.put('/', (req, res) => {
    res.send('putting up with bs')
});

app.post('/api/courses', async (req, res) => {
  // The browser uses the GET mothod to send any message, so 
  // use postman to send a POST message to the app.
  try {
      // Here we'll use our model to save the data.
      // we expect req.body will contain a course record to save to the db.
      const sched = await Course.create(req.body);
      res.status(200).json(sched);
  }
  catch (error) {
      res.status(500).json({ message: error.message });
  }
})




// Use birds.js for routing the birds route
// app.use('/birds', birds);

// // Test code remove once mongo db works
// app.listen(port, () => {
//   console.log(`Example app listening on DEFAULT port ${port}`)
// })

// Default get request
// app.get('/', (req, res) => {
//  res.send('Hello World!')
// })