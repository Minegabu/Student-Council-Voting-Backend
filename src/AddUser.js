// import things
const users = require('./models/users')

const AddUser = async (req, res) => {
    try {
        // create a division id
        let randint = Math.floor(Math.random() * 2)
        // add the division id to the users with the division_id of null
        const add = await users.updateOne({ "division_id": null }, { "division_id": randint })
        res.json({ add })
    } catch (error) {
        // if error then send a response
        console.log(error)
        return res.status(400)
    }
}


module.exports = { AddUser }