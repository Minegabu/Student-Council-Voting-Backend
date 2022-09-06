// import things
const users = require('./models/users')

const GetVote = async (request, response) => {
    try {
        // find all the votes
        const vote = await users.find({}, { candidate_vote: 1, _id: 0 })
        return response.status(200).json({ success: true, data: vote })
    } catch (err) {
        // if it fails to find all the votes
        console.log(err)
        return response.status(400).json({ success: false, data: false })
    }
}
// exporting the function
module.exports = { GetVote }