const admin = require('./models/admin')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const GetAdmin = async (req, res) => {
    const { username, encryptedpassword } = req.body;
    const users = await admin.findOne({ username: username, password: encryptedpassword })
    if (users) {
        const token = jwt.sign({
            name: req.body.username,
            email: req.body.email
        }, 'Y3EV2j4ASnU=')
        return res.status(200).json({ status: true, users: token })
    } else {
        return res.status(400).json({ status: false, users: false })
    }

}
module.exports = { GetAdmin } 