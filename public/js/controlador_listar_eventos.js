'use strict';

const tabla = document.querySelector('#tbl_eventos tbody');

let mostrar_datos = () =>{
    let eventos = listar_eventos();
    console.log(eventos);
    for(let i = 0; i < eventos.length; i++){

        let fila = tabla.insertRow();// Crea el tr de la tabla

        fila.insertCell().innerHTML = eventos[i]['nombre'];
        fila.insertCell().innerHTML = eventos[i]['precio'];
        fila.insertCell().innerHTML = eventos[i]['hora'];
        fila.insertCell().innerHTML = eventos[i]['fecha'];
        fila.insertCell().innerHTML = 'test'
    }; 

};


mostrar_datos();