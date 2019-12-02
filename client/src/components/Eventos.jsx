import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getEventos, getUserEventos, getCurrentEvento } from '../store/actions';

class Eventos extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleSelected = this.handleSelected.bind(this);
    }
    componentDidMount() {
        const { getEventos } = this.props;
        getEventos();
    }

    handleSelected(id) {
        // const { getCurrentEvento } = this.props;
        // getCurrentEvento(id);
        const { history } = this.props;
        history.push(`/evento/${id}`);
    }

    render() {
        const eventos = this.props.eventos.map((evento) => (
            // <li key={evento._id} onClick={() => this.handleSelected(evento._id)}>
            //     {evento.nombre}
            // </li>
            <tr key={evento._id}>
                <td>{evento.nombre}</td>
                <td>{evento.fecha}</td>
                <td>{evento.hora}</td>
                <td>{evento.precio}</td>
                <td onClick={() => this.handleSelected(evento._id)}>Ver</td>
            </tr>
        ));

        return (
            <Fragment>
                <table className="eventos_name">
                    <thead>
                       <tr> 
                        <th>Nombre</th>
                        <th>Fecha</th>
                        <th>Hora</th>
                        <th>Precio</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        {eventos}
                    </tbody>
                </table>
            </Fragment>
        );
    }
};

export default connect((store) => ({ auth: store.auth, eventos: store.eventos }), {
    getEventos,
    getUserEventos,
    getCurrentEvento
})(Eventos);