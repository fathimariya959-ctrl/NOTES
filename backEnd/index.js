require('dotenv').config()
const express = require('express')
const cors = require('cors');
const noteRoutes = require('./Routes/noteRoutes');
const Runserver = require('./Database/Connection');


const app = express()
const PORT = process.env.PORT;


app.use(express.json())
app.use(cors())

Runserver()

app.use('/api', noteRoutes)

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})