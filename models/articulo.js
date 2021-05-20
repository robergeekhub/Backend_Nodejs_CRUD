const mongoose = require('mongoose');

const articuloSchema = {
    nombredearticulo: "String",
    categoria: "String"
}

const Articulo = mongoose.model('Articulo', articuloSchema);

module.exports = Articulo;