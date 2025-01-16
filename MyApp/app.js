const express = require('express')
const mongoose = require('mongoose')
const birds = require('./birds')

const app = express()
const port = 3000

mongoose.connect('mongodb:Student13:Student13@logan',{ dbName: 'home13'})
    .then(() => {
      console.log("Connected to the database!");
      app.listen(port, () => {
          console.log(`Example app listening on port ${port}`);
      });
    })
    .catch(() => {
      console.log("Failed to connect to the database.");
    })

// Default
//app.get('/', (req, res) => {
//  res.send('Hello World!')
//})


// Chained
app.get('/', (req, res, next) => {
   console.log("test");
   next()
},(req, res)=>{
 res.send('Hello World!')
})

// Test code remove once mongo db works
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.put('/', (req, res) => {
    res.send('putting up with bs')
})

app.use('/birds', birds)