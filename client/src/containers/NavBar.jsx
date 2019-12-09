import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout, removeError } from '../store/actions';

const NavBar = ({ auth, logout, removeError }) => (
	<div className="test">
		<div className="logo"></div>

		<ul className="test">
			<li>
				<Link to='/'>Inicio</Link>
			</li>
			{(auth.isAuthenticated && !validarUser(auth.user.tipo)) && (
				<li>
					<Link to='/eventos/nuevo'>Crear evento</Link>
				</li>)}
			{!auth.isAuthenticated && (<li>
				<Link to='/login' onClick={removeError}>Ingresar</Link>
			</li>)}
			{!auth.isAuthenticated && (
				<li>
					<Link to='/register' onClick={removeError}>Registrarse</Link>
				</li>)}
			{auth.isAuthenticated && (
				<li className="logout_container">
					<p className="new_name">{auth.user.username}</p>
					<a href='' onClick={logout}>
						Salir
					</a>
				</li>
			)}
		</ul>
	</div>
);

const validarUser = (tipo) => {
	return (tipo === 'cliente' || tipo === 'admin' || tipo === 'provedor');
};

export default connect(store => ({ auth: store.auth }), { logout, removeError })(NavBar);
