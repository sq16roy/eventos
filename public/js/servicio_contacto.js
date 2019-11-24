'use strict';


let registrar_comentario = (pnombre, pcorreo, psexo, pcomentario) => {
  let request = $.ajax({
    url: "http://localhost:4000/api/registrar_comentario",
    method: "POST",
    data: {
      nombre: pnombre,
      correo: pcorreo,
      sexo: psexo,
      comentario: pcomentario
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

let listar_comentarios = () => {
  let lista_comentarios = [];

  let request = $.ajax({
    url: "http://localhost:4000/api/listar_comentarios",
    method: "GET",
    data: {
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    async : false
  });

  request.done(function (res) {
    lista_comentarios = res.comentarios;
    
  });

  request.fail(function (jqXHR, textStatus) {
    
  });
  return lista_comentarios;
 
};