const users = require('./models/users')

const AddUser = async (req, res) => {
    try {
        let randint = Math.floor(Math.random() * 2)
        const add = await users.updateOne({ "division_id": null }, { "division_id": randint })
        res.json({ add })
    } catch (error) {
        console.log(error)
    }
}


module.exports = { AddUser }