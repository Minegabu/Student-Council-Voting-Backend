const candidates = require('./models/candidates')
const users = require('./models/users')

const GetCandidate = async (request, response) => {
    try {
        const { id } = request.params
        const foundUsers = await users.find({ email: id }, { division_id: 1, candidate_vote: 1, _id: 0 })
        let division_id = foundUsers[0].division_id
        let existingVote = foundUsers[0].candidate_vote
        const target = await candidates.find({ division_id: division_id })
        let data = [existingVote, target]
        return response.status(200).json({ success: true, data: data })
    } catch (error) {
        console.log(error)
        return response.status(400).send('ERROR')
    }
}


module.exports = { GetCandidate }