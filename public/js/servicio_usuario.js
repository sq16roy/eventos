'use strict';


let registrar_usuario = (pnombre, tipo) => {
  let request = $.ajax({
    url: "http://localhost:4000/api/registrar_usuario",
    method: "POST",
    data: {
      nombre: pnombre,
      tipo: tipo,
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
  });

  request.done(function (msg) {
    swal.fire({
      type: 'success',
      title: 'El comentario fue enviado',
      text: 'Nos comunicaremos con usted tan pronto como sea posible'
    });
  });

  request.fail(function (jqXHR, textStatus) {
    swal.fire({
      type: 'error',
      title: 'El comentario no pude ser enviado',
      text: 'Ocurrió un error inesperado, por favor intente de nuevo'
    });
  });
};

let listar_usuarios = () => {
  let lista_usuarios = [];

  let request = $.ajax({
    url: "http://localhost:4000/api/listar_usuarios",
    method: "GET",
    data: {
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    async : false
  });

  request.done(function (res) {
    lista_usuarios = res.lista_usuarios;
    
  });

  request.fail(function (jqXHR, textStatus) {
    
  });
  return lista_usuarios;
 
};