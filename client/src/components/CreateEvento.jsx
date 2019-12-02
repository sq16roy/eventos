import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createEvento } from '../store/actions';

class CreateEvento extends Component {
    constructor(props) {
        super(props);
        this.state = {
            precio: '',
            nombre: '',
            hora: '',
            fecha: ''
        };
        this.handleChange = this.handleSubmit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit(e) {
        const {
            precio,
            nombre,
            hora,
            fecha
        } = this.state;

        e.preventDefault();
        this.props.createEvento({
            precio,
            nombre,
            hora,
            fecha
        });
    }

    render() {
        return (
            <div>
                <form className="crete_event_form" onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="nombre">Nombre</label>
                        <input value={this.state.nombre} onChange={this.handleChange} type="text" name="nombre" />
                    </div>
                    <div>
                        <label htmlFor="fecha">Fecha</label>
                        <input value={this.state.fecha} onChange={this.handleChange} type="date" name="fecha" />
                    </div>
                    <div>
                        <label htmlFor="hora">Hora</label>
                        <input value={this.state.hora} onChange={this.handleChange} type="time" name="hora" />
                    </div>
                    <div>
                        <label htmlFor="precio">Precio</label>
                        <input value={this.state.precio} onChange={this.handleChange} type="number" min="1" name="precio" />
                    </div>
                    <button className="submit_btn" type="submit">Registrar</button>
                </form>
            </div>
        );
    }
}

export default connect(store => ({}), { createEvento })(CreateEvento);