import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { deleteEvento } from '../store/actions';

class Evento extends Component {
    constructor(props) {
        super(props);
        this.state = {
            precio: '',
            nombre: '',
            hora: '',
            fecha: '',
            showEditView: false,
            cancelMsg: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.toggleView = this.toggleView.bind(this);
        this.renderEditeView = this.renderEditeView.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit() {
        console.log('test');
    }

    toggleView() {
        const { evento } = this.props;

        this.setState({
            precio: evento.precio,
            nombre: evento.nombre,
            hora: new Date(evento.hora),
            fecha: '20/10/2019',
            showEditView: this.state.showEditView ? false : true
        });
    }

    renderNormalView(evento, userId, tipo, toggleView, state, handleChange, deleteEvento, isAuthenticated) {
        var _ = require('../../node_modules/lodash');
        return (
            <div className="evento_information_container">
                <h3 className="evento_title">{evento.nombre}</h3>
                <div className="evento_information">
                    <p><strong>Hora:</strong> {evento.hora}</p>
                    <p><strong>Fecha:</strong> {evento.fecha}</p>
                    <p><strong>Precio:</strong> {evento.precio}</p>
                    {
                        (Object.keys(evento).length > 0) &&
                        <div>
                            {_.includes([evento.user._id], userId) && <button className="cancel_btn" disabled={!state.cancelMsg} onClick={() => { deleteEvento(evento._id) }}>Cancelar</button>}
                            {_.includes([evento.user._id], userId) && <button className="edit_btn" onClick={toggleView}>Editar</button>}
                        </div>
                    }
                </div>
                {((isAuthenticated && Object.keys(evento).length > 0) && (_.includes([evento.user._id], userId)) && Object.keys(evento).length > 0) && <textarea className="textarea_cancel" onChange={handleChange} name="cancelMsg" id="" placeholder="Motivo de cancelación" value={state.cancelMsg}></textarea>}
            </div>
        );
    }

    renderEditeView() {
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
                    <button className="submit_btn" type="submit">Update</button>
                </form>
            </div>
        );
    }

    render() {
        const {
            showEditView
        } = this.state;
        const { evento, tipo, deleteEvento, isAuthenticated, userId } = this.props

        return (
            <div>
                {showEditView && this.renderEditeView()}
                {!showEditView && this.renderNormalView(evento, userId, tipo, this.toggleView, this.state, this.handleChange, deleteEvento, isAuthenticated)}
            </div>
        );
    }
}

export default connect(store => ({ userId: store.auth.user.id, evento: store.currentEvento, tipo: store.auth.user.tipo, isAuthenticated: store.auth.isAuthenticated }), { deleteEvento })(Evento);