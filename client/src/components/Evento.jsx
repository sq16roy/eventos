import React from 'react';
import {connect} from 'react-redux';

const Evento = ({evento}) => {
    return (
        <div>
            <h3>{evento.nombre}</h3>
            <div>
                <p>{evento.hora}</p>
                <p>{evento.fecha}</p>
                <p>{evento.precio}</p>
            </div>
        </div>
    );
};
export default connect(store => ({evento: store.currentEvento}))(Evento);