const userModel = require('../models/UserModel')

const userController = {
    register: function (req, res) {
        const {
            name,
            email,
            password,
        } = req.body

        const user = new userModel({
            name,
            email,
            password,
        })

        user.save()

        res.send('success')
    },
    login: function(req, res) {
        console.log('login')
        res.send('login')
    }
}


module.exports = userController


/*
const userController = {
    register: async function (req, res) {
        const user = new UserSchema({
            name,
            email,
            password,
        } = req.body) 

        try {
            const savedUser = await user.save()
            res.send(savedUser)
        } catch (error) {
            res.status(400).send(error)
        }

    },
    login: function (req, res) {
        console.log('/login')
        res.send('login')
    }
}


module.exports = userController*/