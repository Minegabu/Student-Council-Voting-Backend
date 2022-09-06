// import things
const users = require('./models/users')

const AddVote = async (req, res) => {
    try {
        // get vote from the post request
        const { vote, name } = req.body;
        // add the vote to the database
        const add = await users.updateOne({ name: name }, { $set: { "candidate_vote": vote } })
        res.json({ add })
    } catch (error) {
        // return a failed response if it could not do that
        console.log(error)
        return res.status(400).send('Username already exists')
    }
}


module.exports = { AddVote }