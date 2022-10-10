const users = require('./models/users')

const AddVote = async (req, res) => {
    try {
        const { vote, name } = req.body;
        const add = await users.updateOne({ name: name }, { $set: { "candidate_vote": vote } })
        console.log(add)
        res.json({ add })
    } catch (error) {
        console.log(error)
        return res.status(400).send('Username already exists')
    }
}

module.exports = { AddVote }