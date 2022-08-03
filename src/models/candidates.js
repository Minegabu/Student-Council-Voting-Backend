const { Schema, model, models } = require("mongoose");


const candidatesSchema = new Schema({

    name: { type: String, required: true, unique: true },

    description: { type: String, required: true },

    division_id: { type: Number, default: 0 },


});

const Candidate = model('candidates', candidatesSchema, 'candidates')
module.exports = Candidate
