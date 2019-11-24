'use strict';

const tabla = document.querySelector('#tbl_comentarios tbody');

let mostrar_datos = () =>{
    let comentarios = listar_comentarios();
    for(let i = 0; i < comentarios.length; i++){

        let fila = tabla.insertRow();// Crea el tr de la tabla

        fila.insertCell().innerHTML = comentarios[i]['nombre'];
        fila.insertCell().innerHTML = comentarios[i]['correo'];
        fila.insertCell().innerHTML = comentarios[i]['sexo'];
        fila.insertCell().innerHTML = comentarios[i]['comentario'];
    }; 

};


mostrar_datos();