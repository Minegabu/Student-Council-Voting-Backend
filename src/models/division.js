const { Schema, model, models } = require("mongoose");

const divisionSchema = new Schema({
    name: String,

});

const division = models.divison || model('division', divisionSchema)

module.exports = division;
