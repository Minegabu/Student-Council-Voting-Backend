const { Schema, model, models } = require("mongoose");

const adminSchema = new Schema({
    username: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true }
})

module.exports = model('admin', adminSchema);