const express = require('express')
const birds = require('./birds')
const app = express()
const port = 3000

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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.put('/', (req, res) => {
    res.send('putting')
})

app.use('/birds', birds)