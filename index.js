require('dotenv').config()
const express = require('express')
const userRouter = require('./routes/userRouter')
const db = require('./database/db')

const app = express()

db.connect()

app.use('/user', userRouter)


const port = process.env.port 
app.listen(port, () => console.log(`running on http://localhost:${port}`))