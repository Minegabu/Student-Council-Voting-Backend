// import things
const candidates = require('./models/candidates')

const AddCandidates = async (req, res) => {
    try {
        // get the data from the post request
        const { username, divisionid, description } = req.body
        // add a candiate with the data 
        const add = await candidates.create({ name: username, division_id: divisionid, description: description })
        res.json({ add })
        console.log(add)
    } catch (err) {
        // if error send a response
        console.log(err)
        return res.status(400)
    }
}

module.exports = { AddCandidates }