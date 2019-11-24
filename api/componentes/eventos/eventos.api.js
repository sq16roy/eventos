'use strict';

const modelo_evento = require('./eventos.model');

module.exports.registrar = function(req, res){
    let nuevo_evento = new modelo_evento(
        {
            nombre : req.body.nombre,
            precio : req.body.precio,
            hora : req.body.hora,
            fecha : req.body.fecha
        }
    );
    nuevo_evento.save(
        function (error){
            if(error){
                res.json({success : false , msg : 'No se pudo registrar el evento'});
            }else{
                res.json({success: true , msg : 'El evento se registró éxito'});
            }
        }
    );
};

module.exports.listar = function(req, res){
    modelo_evento.find().then(
        function(eventos){
            if(eventos.length > 0){
                res.json({success: true, lista_eventos : eventos});
            }else{
                res.json({success: false, lista_eventos : eventos});
            }
        }

    );
};