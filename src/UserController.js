// import things
const candidates = require('./models/candidates')
const users = require('./models/users')

const GetCandidate = async (request, response) => {
    try {
        // get the id from the origin url
        const { id } = request.params
        // get the user from the id
        const foundUsers = await users.find({ email: id }, { division_id: 1, candidate_vote: 1, _id: 0 })
        let division_id = foundUsers[0].division_id
        // see if there is an existing vote
        let existingVote = foundUsers[0].candidate_vote
        // get the candidate of the division id
        const target = await candidates.find({ division_id: division_id })
        let data = [existingVote, target]
        // return the sucess status of 200 and the data
        return response.status(200).json({ success: true, data: data })
    } catch (error) {
        // return an error if it did not work
        console.log(error)
        return response.status(400).send('ERROR')
    }
}

// exporting the function
module.exports = { GetCandidate }