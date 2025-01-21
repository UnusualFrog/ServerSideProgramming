const express = require('express')
const mongoose = require('mongoose')
const birds = require('./birds')

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
    })

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
})

// Use birds.js for routing the birds route
app.use('/birds', birds)

// // Test code remove once mongo db works
// app.listen(port, () => {
//   console.log(`Example app listening on DEFAULT port ${port}`)
// })

// Default get request
// app.get('/', (req, res) => {
//  res.send('Hello World!')
// })