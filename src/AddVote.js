const users = require('./models/users')

const AddVote = async (req, res) => {
    try {
        const { vote, name } = req.body;
        const add = await users.updateOne({ email: name }, { $set: { "candidate_vote": vote } })
        res.json({ add })
        return res.status(200)
    } catch (error) {
        console.log(error)
        return res.status(400).send('Username already exists')
    }
}

module.exports = { AddVote }