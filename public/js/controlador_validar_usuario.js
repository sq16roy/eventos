'use strict';


const input_correo = document.querySelector('#correo');
const input_contrasenna = document.querySelector('#contrasenna');
const btn_ingresar = document.querySelector('#btnIngresar');

function getDatos() {
    let correo = input_correo.value;
    let contrasenna = input_contrasenna.value;
    let errores = validar(correo, contrasenna);
    let usuarioAceptado = false;

    if (!errores) {
        usuarioAceptado = validar_usuario(correo, contrasenna);
        if (usuarioAceptado) {
            location.href = 'listar_eventos.html';
        }
    }
};

function validar(correo, contrasenna) {
    let error = false;

    if (correo == '') {
        error = true;
        input_correo.classList.add('error_input');
    } else {
        input_correo.classList.remove('error_input');
    }

    if (contrasenna == '') {
        error = true;
        input_contrasenna.classList.add('error_input');
    } else {
        input_contrasenna.classList.remove('error_input');
    }

    return error;
};

btn_ingresar.addEventListener('click', getDatos);