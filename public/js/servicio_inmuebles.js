'use strict';

function registrar_inmueble(pnombre, pprecio, pprovincia, pcanton){
    let request = $.ajax({
        url : 'http://localhost:4000/api/registrar_inmueble',
        method : "POST",
        data : {
            nombre : pnombre,
            precio : pprecio,
            provincia : pprovincia,
            canton: pcanton
        },
        dataType : "json",
        contentType : 'application/x-www-form-urlencoded; charset=UTF-8' 
    });

    request.done(function(res){
        swal.fire({
            type : 'success',
            title : 'Proceso realizado con éxito',
            text : res.msg
        });

    });

    request.fail(function(res){
        swal.fire({
            type : 'error',
            title : 'Proceso no realizado',
            text : res.msg
        });

    });
};