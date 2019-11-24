'use strict';

const select_provincias = document.querySelector('#slt_provincias');
const select_cantones = document.querySelector('#slt_cantones');
let llenar_provincias = () =>{
    
    for(let i = 0; i < provincias.length; i++){
        let nuevaOpcion = new Option(provincias[i]['nombre']);
        nuevaOpcion.value = provincias[i]['idProvincia'];
        select_provincias.appendChild(nuevaOpcion);
    }
};

let llenar_cantones = () =>{
    let provincia = select_provincias.value;
    select_cantones.innerHTML = '';
    
    for(let i = 0; i < cantones.length; i++){
        if(provincia == cantones[i]['Provincia_idProvincia']){
            let nuevaOpcion = new Option(cantones[i]['nombre']);
            nuevaOpcion.value = cantones[i]['nombre'];
            select_cantones.appendChild(nuevaOpcion);
        }
        
    }
};

select_provincias.addEventListener('change', llenar_cantones);

llenar_provincias();
