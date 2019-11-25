'use strict';

let validar_usuario = (correo, contrasenna) => {
  let respuesta = '';

  let request = $.ajax({
    url: "http://localhost:4000/api/validar_usuario",
    method: "post",
    data: {
      correo: correo,
      contrasenna: contrasenna
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    async: false
  });

  request.done(function (res) {
    respuesta = res;
    sessionStorage.setItem('conectado', res.success);
    sessionStorage.setItem('tipo_usuario', res.usuario.tipo);
  });

  request.fail(function (res) {
    respuesta = res;
  });
  return respuesta;

};