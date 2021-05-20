const Articulo = require("../models/articulo");

class ArticuloController {

    constructor() {
    }
    async indexAll() {
        return Articulo.find().limit(10);
    }

    async store(articulo) {
        return Articulo.create(articulo);
    }

    async update(id, articulo) {    
        return Articulo.findByIdAndUpdate(id,articulo);
    }

    async destroy(id) {
        return Articulo.findByIdAndRemove(id);
    }
}

let articuloController = new ArticuloController();
module.exports = articuloController;