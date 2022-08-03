const candidates = require('./models/candidates')

const AddCandidates = async (req, res) => {
    try {
        const { username, divisionid, description } = req.body
        const add = await candidates.create({ name: username, division_id: divisionid, description: description })
        res.json({ add })
        console.log(add)
    } catch (err) {
        console.log(err)
    }
}

module.exports = { AddCandidates }