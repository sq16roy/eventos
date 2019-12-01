import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import { getEventos, getUserEventos, getCurrentEvento } from '../store/actions';

class Eventos extends Component {
	constructor(props) {
		super(props);
        this.state = {};
		this.handleSelected = this.handleSelected.bind(this);        
    }
    componentDidMount(){
        const { getEventos } = this.props;
        getEventos();
    }

    handleSelected(id){
        // const { getCurrentEvento } = this.props;
        // getCurrentEvento(id);
        const { history } = this.props;
        history.push(`/evento/${id}`);
    }

	render() {
        const eventos = this.props.eventos.map((evento) => (
            <li key={evento._id} onClick={() => this.handleSelected(evento._id)}>
                {evento.nombre}
            </li>
        ));

		return (
            <Fragment>
                <ul>
                    {eventos}
                </ul>
            </Fragment>
        );
	}
};

export default connect((store) => ({ auth: store.auth, eventos: store.eventos }), {
	getEventos,
	getUserEventos,
	getCurrentEvento
})(Eventos);