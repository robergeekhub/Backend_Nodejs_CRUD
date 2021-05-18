class Usuario {

    nombredeusuario;
    contraseña;

    constructor(usuario){
        this.nombredeusuario = usuario.nombredeusuario;
        this.contraseña = usuario.contraseña;

    }
}

module.exports = Usuario;