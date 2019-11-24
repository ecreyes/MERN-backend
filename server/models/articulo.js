const mongoose = require('mongoose');

let Schema = mongoose.Schema;
let articuloSchema = new Schema({
    titulo: {
        type: String,
        required: [true, 'El campo titulo es obligatorio']
    },
    cuerpo: {
        type: String,
        required: [true, "El campo cuerpo es obligatorio"]
    }
});

module.exports = mongoose.model('Articulo',articuloSchema);