const Usuario = require("../models/usuario");

class usuarioController {

    constructor() {
    }
    async indexAll() {
        return Usuario.find().limit(10);
    }

    async store(usuario) {
        return Usuario.create(usuario);
    }

    async update(id, usuario) {    
        return Usuario.findByIdAndUpdate(id,usuario);
    }

    async destroy(id) {
        return Usuario.findByIdAndRemove(id);
    }
}

let usuarioController = new Usuario();
module.exports = usuarioController;