
'use strict';

const modelo_usuario = require('./usuarios.model');

module.exports.registrar = function(req, res){
    let nuevo_usuario = new modelo_usuario(
        {
            nombre : req.body.nombre,
            tipo : req.body.tipo,
            correo : req.body.correo
        }
    );
    nuevo_usuario.save(
        function (error){
            if(error){
                res.json({success : false , msg : 'No se pudo registrar el usuario'});
            }else{
                res.json({success: true , msg : 'El usuario se registró éxito'});
            }
        }
    );
};

module.exports.listar = function(req, res){
    modelo_usuario.find().then(
        function(usuarios){
            if(usuarios.length > 0){
                res.json({success: true, lista_usuarios : usuarios});
            }else{
                res.json({success: false, lista_usuarios : usuarios});
            }
        }

    );
};
module.exports.validar = function(req, res) {
    modelo_usuario.findOne({correo : req.body.correo}).then(
        function(usuario){
            if (usuario) {
                if (usuario.contrasenna == req.body.contrasenna) {
                    res.json({
                        success: true,
                        usuario: usuario
                    });
                } else {
                    res.json({
                        success: false
                    }); 
                }
            } else {
                res.json({
                    success: false,
                    msg : 'El usuario no existe'
                }); 
            }
        }
    );
};


let obtener_datos = (validar) => {
    let nombre = input_nombre.value;
    if (validar3()) {
        Swal.fire({
            type: 'warning',
            title: 'La nueva categoría ya existe.',
            text: 'Por favor ingresar otra.',
            confirmButtonText: 'Entendido',
        })
    } else {
        console.log('valido sin ningun problema');
        registrar_tipos_de_evento(nombre, input_imagen, 'Activo');
        Swal.fire({
            type: 'success',
            title: 'Registro realizado con éxito',
            text: 'El Tipo de evento ha sido almacenado',
            confirmButtonText: 'Entendido',
        }).then(function() {
            location.reload();
        });
    }
};