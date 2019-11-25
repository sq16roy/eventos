'use strict';

const tabla = document.querySelector('#tbl_eventos tbody');
const tipo_usuario = sessionStorage.getItem('tipo_usuario');
function cancel(id) {
    sessionStorage.setItem('evento_id', id);
    location.href='registrar_eventos.html';
;}

let mostrar_datos = () =>{
    let eventos = listar_eventos();
    for(let i = 0; i < eventos.length; i++){

        let fila = tabla.insertRow();// Crea el tr de la tabla
        var btn = document.createElement('input');
        btn.type = "button";
        btn.className = "btn";
        btn.value = 'Cancel';
        btn.onclick = (e)=> cancel($(e.target).closest("tr")[0].id);
        fila.id = eventos[i]['_id']
        fila.insertCell().innerHTML = eventos[i]['nombre'];
        fila.insertCell().innerHTML = eventos[i]['precio'];
        fila.insertCell().innerHTML = eventos[i]['hora'];
        fila.insertCell().innerHTML = eventos[i]['fecha'];
        tipo_usuario == 'admin' ? fila.appendChild(btn) : '';
    }; 

};


mostrar_datos();