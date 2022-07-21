const express = require('express')
const app = express()
const UserController = require('./src/UserController')
const mongoose = require("mongoose");


const port = 1234;

(async () => {
    const db = await mongoose.connect('mongodb://localhost:27017/voting');
})()

app.get('/api/get-candidate/:id', UserController.GetCandidate)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})