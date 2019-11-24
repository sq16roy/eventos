'use strict';

const input_nombre = document.querySelector('#txt_nombre');
const input_correo = document.querySelector('#txt_correo');
const fieldset_sexo = document.querySelector('#fieldset_sexo');
const input_comentario = document.querySelector('#txt_comentario');
const boton_enviar = document.querySelector('#btn_enviar');

let validar = () => {
    let error = false;
    let sexo_seleccionado = document.querySelector('#fieldset_sexo input[type=radio]:checked');

    if (input_nombre.value == '') {
        error = true;
        input_nombre.classList.add('error_input');
    } else {
        input_nombre.classList.remove('error_input');
    }

    if (input_correo.value == '') {
        error = true;
        input_correo.classList.add('error_input');
    } else {
        input_correo.classList.remove('error_input');
    }

    if (sexo_seleccionado == null) {
        error = true;
        fieldset_sexo.classList.add('error_input');
    } else {
        fieldset_sexo.classList.remove('error_input');
    }


    if (input_comentario.value == '') {
        error = true;
        input_comentario.classList.add('error_input');
    } else {
        input_comentario.classList.remove('error_input');
    }


    return error;
};

let obtener_datos = () => {

    if (validar() == false) {
        // Se ejecuta solo si la validación no da error
        let nombre = input_nombre.value;
        let correo = input_correo.value;
        let sexo = document.querySelector('#fieldset_sexo input[type=radio]:checked').value;
        let comentario = input_comentario.value;

        registrar_comentario(nombre, correo, sexo, comentario);
        
       
        

    } else {
        swal.fire({
            type: 'warning',
            title: 'El comentario no fue enviado',
            text: 'Por favor revise los campos resaltados'
        });
    }

};




boton_enviar.addEventListener('click', obtener_datos);