'use strict';

function registrar_evento(nombre, precio, fecha, hora){
    let request = $.ajax({
        url : 'http://localhost:4000/api/registrar_evento',
        method : "POST",
        data : {
            nombre : nombre,
            precio : precio,
            fecha : fecha,
            hora: hora
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


let listar_eventos = () => {
    let lista_eventos = [];
  
    let request = $.ajax({
      url: "http://localhost:4000/api/listar_eventos",
      method: "GET",
      data: {
      },
      dataType: "json",
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      async : false
    });
  
    request.done(function (res) {
      lista_eventos = res.lista_eventos;
      
    });
  
    request.fail(function (jqXHR, textStatus) {
      
    });
    return lista_eventos;
   
  };