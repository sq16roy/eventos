'use strict';

const boton_registrar = document.querySelector('#btn_registrar');

const input_nombre = document.querySelector('#txt_nombre');
const input_precio = document.querySelector('#txt_precio');
const input_fecha = document.querySelector('#input_fecha');
const input_hora = document.querySelector('#input_hora');

function obtener_datos(){

    let nombre = input_nombre.value;
    let precio = input_precio.value;
    let fecha = input_fecha.value;
    let hora = input_hora.value;

    registrar_evento(nombre, precio, fecha, hora);
};


boton_registrar.addEventListener('click', obtener_datos);