const candidates = require('./models/candidates')
const users = require('./models/users')

const GetCandidate = async (request, response) => {
    try {
        const { id } = request.params
        console.log(id)
        const foundUsers = await users.find({ email: id }, { division_id: 1, _id: 0 })
        const target = await candidates.find({ division_id: 0 })
        return response.status(200).json({ success: true, data: target })
    } catch (error) {
        console.log(error)
        return response.status(400).send('ERROR')
    }
}


module.exports = { GetCandidate }