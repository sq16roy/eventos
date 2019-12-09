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
        this.handleChange = this.handleChange.bind(this);
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
        this.setState({
            precio: '',
            nombre: '',
            hora: '',
            fecha: ''
        });
    }

    render() {
        const {
            precio,
            nombre,
            hora,
            fecha,
            tipoEvento,
            cantidadAsistentes,
            pais,
            recinto,
            descripcion
        } = this.state;

        return (
            <div>
                <form className="crete_event_form" onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="nombre">Nombre</label>
                        <input value={nombre} onChange={this.handleChange} type="text" name="nombre" required />
                    </div>
                    <div>
                        <label htmlFor="tipoEvento">Tipo de evento</label>
                        <input value={tipoEvento} onChange={this.handleChange} type="text" name="tipoEvento" required />
                    </div>
                    <div>
                        <label htmlFor="cantidadAsistentes">Cantidad de asistentes</label>
                        <input value={cantidadAsistentes} onChange={this.handleChange} type="number" name="cantidadAsistentes" required />
                    </div>
                    <div>
                        <label htmlFor="pais">País</label>
                        <input value={pais} onChange={this.handleChange} type="text" name="pais" required />
                    </div>

                    <div className="slt_container">
                        <label htmlFor="sltRecinto">Recinto</label>
                        <select className="recinto_slt" id="recinto" value={recinto} name='recinto' onChange={this.handleChange}>
                            <option value="">Recinto</option>
                            <option value="San Jose">Estadio Nacional</option>

                        </select>
                    </div>
                    <div>
                        <label htmlFor="fecha">Fecha</label>
                        <input value={fecha} onChange={this.handleChange} type="date" name="fecha" required />
                    </div>
                    <div>
                        <label htmlFor="hora">Hora</label>
                        <input value={hora} onChange={this.handleChange} type="time" name="hora" required />
                    </div>
                    <div>
                        <label htmlFor="precio">Precio</label>
                        <input value={precio} onChange={this.handleChange} type="number" min="1" name="precio" required />
                    </div>

                    <div>
                        <label htmlFor="descripcion">Descripción</label>

                        <textarea name="descripcion" id="descripcion_evento" cols="30" rows="10" value={descripcion} onChange={this.handleChange}></textarea>

                    </div>
                    <button className="submit_btn" type="submit">Crear</button>
                </form>
            </div>
        );
    }
}

export default connect(store => ({}), { createEvento })(CreateEvento);