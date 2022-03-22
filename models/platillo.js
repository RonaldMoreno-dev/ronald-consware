const mongoose = require('mongoose')

var Schema = mongoose.Schema;

var PlatilloSchema = new Schema({
    nombre: String,
    receta: String
});

module.exports = mongoose.model("Platillo", PlatilloSchema)
