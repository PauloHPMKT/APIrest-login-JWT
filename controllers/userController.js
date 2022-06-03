const userModel = require('../models/UserModel')

const userController = {
    register: async function (req, res) {
        const {
            name,
            email,
            password,
            createdAt,
        } = req.body

        const user = await new userModel({
            name,
            email,
            password,
            createdAt,
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