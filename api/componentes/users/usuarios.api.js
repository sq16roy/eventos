
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