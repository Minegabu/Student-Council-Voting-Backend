const admin = require('./models/admin')
const jwt = require('jsonwebtoken')
const GetAdmin = async (req, res) => {
    try {
        const { username, password } = req.body;
        const users = await admin.findOne({ username: username, password: password })
        if (users) {
            const token = jwt.sign({
                name: req.body.username,
                email: req.body.email
            }, 'Y3EV2j4ASnU=')
            return res.status(200).json({ status: true, users: token })
        } else {
            return res.status(400).json({ status: false, users: false })
        }
    } catch (error) {
        console.log(error)
        return res.status(400).send('ERROR')
    }

}
module.exports = { GetAdmin } 