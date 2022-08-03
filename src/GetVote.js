const users = require('./models/users')

const GetVote = async (request, response) => {
    try {
        const vote = await users.find({}, { candidate_vote: 1, _id: 0 })
        return response.status(200).json({ success: true, data: vote })
    } catch (err) {
        console.log(err)
    }
}

module.exports = { GetVote }