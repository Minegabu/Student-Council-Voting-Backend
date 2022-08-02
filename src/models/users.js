const { Schema, model } = require("mongoose");

const usersSchema = new Schema({
    name: { type: String },

    email: {
        type: String,

        unique: true,

        required: true

    },

    division_id: { type: Number, default: 0, required: true },

    candidate_vote: { type: String, default: null, required: true },

});

module.exports = model('users', usersSchema);