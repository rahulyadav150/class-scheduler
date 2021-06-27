require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const db = require('./database')
const path = require('path')
const app = express()


app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api',require('./routes/classRouter'));
app.use('/api',require('./routes/teacherRouter'));
const Port =  process.env.PORT || 5000 

// app.use(express.static(path.join(__dirname, "client", "build")))
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, "client", "build", "index.html"));
// })







app.post('/', async (req,res)=>{
   const {id,name} = req.body
   
   
})

app.listen(Port,(req,res) => {
    console.log(`connected to server on port ${Port}`)
})