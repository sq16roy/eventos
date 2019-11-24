'use strict';

const tabla = document.querySelector('#tbl_usuarios tbody');

let mostrar_datos = () =>{
    let usuarios = listar_usuarios();
    console.log(usuarios);
    for(let i = 0; i < usuarios.length; i++){

        let fila = tabla.insertRow();// Crea el tr de la tabla

        fila.insertCell().innerHTML = usuarios[i]['nombre'];
        fila.insertCell().innerHTML = usuarios[i]['tipo'];
        fila.insertCell().innerHTML = usuarios[i]['correo'];
    }; 

};


mostrar_datos();