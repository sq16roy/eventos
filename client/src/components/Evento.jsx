import React from 'react';
import { connect } from 'react-redux';

const Evento = ({ evento }) => {
    return (
        <div>
            <h3 className="evento_title">{evento.nombre}</h3>
            <div className="evento_information">
                <p><strong>Hora:</strong> {evento.hora}</p>
                <p><strong>Fecha:</strong> {evento.fecha}</p>
                <p><strong>Precio:</strong> {evento.precio}</p>
            </div>
        </div>
    );
};
export default connect(store => ({ evento: store.currentEvento }))(Evento);