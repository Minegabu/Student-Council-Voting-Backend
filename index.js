// import things the express way
const express = require('express')
const app = express()
const UserController = require('./src/UserController')
const AddUser = require('./src/AddUser')
const AddVote = require('./src/AddVote')
const GetAdmin = require('./src/FindAdmin')
const AddCandidates = require('./src/AddCandidate')
const GetVote = require('./src/GetVote')
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

// make it so people can access the api
const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
}
app.use(cors(corsOptions))
// things to make it read the json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
// setting the port and connection the database
port = 1234;
(async () => {
    const db = await mongoose.connect(process.env.MONGODB_URI);
})()
// routing all the routes
app.get('/api/get-candidate/:id', UserController.GetCandidate)

app.post('/api/users/add/', AddUser.AddUser)

app.post('/api/vote/update/', AddVote.AddVote)

app.post('/api/admin/verify', GetAdmin.GetAdmin)

app.post('/api/admin/createcandidate', AddCandidates.AddCandidates)

app.get('/api/admin/get-vote', GetVote.GetVote)

app.listen(process.env.PORT || 5000, () => {
    console.log(`Example app listening on port ${port}`)
})

