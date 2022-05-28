const mongoose = require('mongoose')

function connect() {
    mongoose.connect(process.env.MONGO_CONNECTION_URL) //url repassadaa no arquivo .env

    const db = mongoose.connection

    db.once('open', () => {
        console.log('Connected to databse')
    })

    db.on('error', console.error.bind(console, 'Connection error'))
}


module.exports = {
    connect
}

