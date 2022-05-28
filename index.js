require('dotenv').config()

const express = require('express')

const app = express()






const port = process.env.port 
app.listen(port, () => console.log(`running on http://localhost:${port}`))