import React, { Component, Fragment } from 'react';
import {Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { updateUsuario } from '../store/actions';

class Usuarios extends Component {
    constructor(props) {
        super(props);
        this.state = {
           usuarios: this.props.auth.user.usuarios || []
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e, usuario){
        const { updateUsuario } = this.props;
        const { usuarios } = this.state;
        const tempUSers = [...usuarios];
        let objIndex = tempUSers.findIndex((obj => obj._id == usuario._id));
        tempUSers[objIndex].status = JSON.parse(e.target.value.toLowerCase());

        this.setState({
            usuarios: tempUSers
        })
        updateUsuario({
            [e.target.name]: JSON.parse(e.target.value.toLowerCase())
        });
    }
    render() {
        const { auth, updateUsuario, isAuthenticated, userType } = this.props;

        if (!isAuthenticated || userType!=='admin') return <Redirect to="/login" />;

        const usuarios = auth.user.usuarios.map((usuario) => (
            <tr key={usuario._id}>
                <td>{usuario.username}</td>
                <td>{usuario.created}</td>
                <td>{usuario.email}</td>
                <td>{usuario.tipo}</td>
                <td>{usuario.status ? 'Activo' : 'Inactivo'}</td>
                <td>
                    <select name="status" id="userStatus" onChange={(e) => {this.handleChange(e, usuario)}}>
                        <option value={true}>Activo</option>
                        <option value={false}>Inactivo</option>
                    </select>
                </td>
            </tr>
        ));
        return (
            <table className="eventos_name">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Creado</th>
                    <th>Correo</th>
                    <th>Tipo</th>
                    <th>Status</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {usuarios}
            </tbody>
        </table>
        );
    }
}
export default connect((store) => ({ auth: store.auth }), {
    updateUsuario,
})(Usuarios);