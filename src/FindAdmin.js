const admin = require('./models/admin')

const GetAdmin = async (req, res) => {
    try {
        const { username, password } = req.body;
        const users = await admin.find({ username: username, password: password })
        if (users) {
            console.log(users)
            return res.status(200).json({ success: true, user: true })
        } else {
            return res.status(400).json({ success: false, user: false })
        }
    } catch (error) {
        console.log(error)
        return res.status(400).send('ERROR')
    }

}
module.exports = { GetAdmin } 