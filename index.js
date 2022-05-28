require('dotenv').config()
const express = require('express')
const userRouter = require('./routes/userRouter')

const app = express()


app.use('/user', userRouter)


const port = process.env.port 
app.listen(port, () => console.log(`running on http://localhost:${port}`))