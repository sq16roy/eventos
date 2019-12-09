import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createLugar } from '../store/actions';

class CreateLugar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            cupo: "",
            provincia: '',
            direccion: ''
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
            nombre,
            cupo,
            provincia,
            direccion,
        } = this.state;

        e.preventDefault();
        this.props.createLugar({
            nombre,
            cupo,
            provincia,
            direccion,
        });
        this.setState({
            nombre: '',
            cupo: '',
            direccion: '',

        });
    }

    render() {
        const {
            nombre,
            cupo,
            provincia,
            direccion,
        } = this.state;

        return (
            <div className="crete_event_form_container">
                <form className="crete_event_form" onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="nombre">Nombre</label>
                        <input value={nombre} onChange={this.handleChange} type="text" name="nombre" required />
                    </div>

                    <div className="inputBox">
                        <label htmlFor="sltDireccion">Dirección<span className="required"> *</span></label>
                        <select className="tipo_slt" id="provincia" value={provincia} name='provincia' required onChange={this.handleChange}>
                            <option value="">Provincia</option>
                            <option value="San Jose">San José</option>
                            <option value="Alajuela">Alajuela</option>
                            <option value="Cartago">Cartago</option>
                            <option value="Heredia">Heredia</option>
                            <option value="Guanacaste">Guanacaste</option>
                            <option value="Puntarenas">Puntarenas</option>
                            <option value="Limon">Limón</option>
                        </select>
                    </div>
                    <div className="inputBox">
                        <label htmlFor="txtDireccion">Dirección exacta<span className="required"> *</span></label>
                        <input className="txtDireccion" id="txtDireccion" required value={direccion} name='direccion' onChange={this.handleChange}></input>
                    </div>

                    <div>
                        <label htmlFor="cantidadAsistentes">Cupo</label>
                        <input value={cupo} onChange={this.handleChange} type="number" name="cupo" />
                    </div>
                    <button className="submit_btn" type="submit">Crear</button>
                </form>
            </div>
        );
    }
}

export default connect(store => ({}), { createLugar })(CreateLugar);