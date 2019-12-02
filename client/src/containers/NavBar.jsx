import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout, removeError } from '../store/actions';

const NavBar = ({ auth, logout, removeError }) => (
	<div className="">
		<ul>
			<li>
				<Link to='/'>Inicio</Link>
			</li>
			{auth.isAuthenticated && (
			<li>
				<Link to='/eventos/nuevo'>Crear evento</Link>
			</li>)}
			{!auth.isAuthenticated && (<li>
				<Link to='/login' onClick={removeError}>Ingresar</Link>
			</li>)}
			{!auth.isAuthenticated && (
			<li>
				<Link to='/register' onClick={removeError}>Registro</Link>
			</li>)}
			{auth.isAuthenticated && (
				<li>
					<a href='' onClick={logout}>
						Salir
					</a>
					<p>{auth.user.username}</p>
				</li>
			)}
		</ul>
	</div>
);

export default connect(store => ({auth: store.auth}),{logout,removeError})(NavBar);
