'use strict';

const boton_registrar = document.querySelector('#btn_registrar');

const input_nombre = document.querySelector('#txt_nombre');
const input_precio = document.querySelector('#txt_precio');
const slt_provincia = document.querySelector('#slt_provincias');
const slt_cantones = document.querySelector('#slt_cantones');

function obtener_datos(){

    let nombre = input_nombre.value;
    let precio = input_precio.value;
    let provincia = slt_provincia.selectedOptions[0].textContent;
    let canton = slt_cantones.selectedOptions[0].textContent;

    registrar_inmueble(nombre, precio, provincia, canton);
};


boton_registrar.addEventListener('click', obtener_datos);