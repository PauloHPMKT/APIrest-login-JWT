const mongoose = require('mongoose')


const schema = new mongoose.Schema({
    name: {type: String, required: true},
    email: String,
    password: Number,
    createdAt: { type: Date, default: Date.now },
})

const Model = mongoose.model('UserModel', schema)

module.exports = Model

/*const userSchema = mongoose.Schema({
    name: { type: String, required: true, minlength: 3, maxlength: 50 },
    email: { type: String, required: true, minlength: 3, maxlength: 100 },
    password: { type: String, required: true, minlength: 6, maxlength: 200 },
    createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('User', userSchema)*/