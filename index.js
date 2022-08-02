const express = require('express')
const app = express()
const UserController = require('./src/UserController')
const AddUser = require('./src/AddUser')
const AddVote = require('./src/AddVote')
const GetAdmin = require('./src/FindAdmin')
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");


const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionSuccessStatus: 200,
}
app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
const port = 1234;

(async () => {
    const db = await mongoose.connect('mongodb://localhost:27017/voting');
})()

app.get('/api/get-candidate/:id', UserController.GetCandidate)

app.post('/api/users/add/', AddUser.AddUser)

app.post('/api/vote/update/', AddVote.AddVote)

app.post('/api/admin/verify', GetAdmin.GetAdmin)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

