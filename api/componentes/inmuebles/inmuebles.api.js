'use strict';

const modelo_inmueble = require('./inmuebles.model');

module.exports.registrar = function(req, res){
    let nuevo_inmueble = new modelo_inmueble(
        {
            nombre : req.body.nombre,
            precio : req.body.precio,
            provincia : req.body.provincia,
            canton : req.body.canton
        }
    );
    nuevo_inmueble.save(
        function (error){
            if(error){
                res.json({success : false , msg : 'No se pudo registrar el inmueble'});
            }else{
                res.json({success: true , msg : 'El inmueble se registró éxito'});
            }
        }
    );
};

module.exports.listar = function(req, res){
    modelo_inmueble.find().then(
        function(inmuebles){
            if(inmuebles.length > 0){
                res.json({success: true, lista_inmuebles : inmuebles});
            }else{
                res.json({success: false, lista_inmuebles : inmuebles});
            }
        }

    );
};