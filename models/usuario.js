const mongoose = require('mongoose');

const usuarioSchema = {
    nombredeusuario: "String",
    contraseña: "String"
}

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;