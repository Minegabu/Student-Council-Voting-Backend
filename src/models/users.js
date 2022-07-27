const { Schema, model, models } = require("mongoose");

const usersSchema = new Schema({
    name: { type: String },

    email: {
        type: String,

        unique: true,

    },

    division_id: { type: Number, default: 0, unique: true, },

    candidate_vote: { type: String, default: null },

});

module.exports = model('users', usersSchema);