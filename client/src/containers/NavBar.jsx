import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../store/actions';

const NavBar = ({ auth, logout }) => (
	<div >
		<ul className="test">
			<li>
				<Link to='/'>Inicio</Link>
			</li>
			{auth.isAuthenticated && (
				<li>
					<Link to='/eventos/nuevo'>Crear Evento</Link>
				</li>)}
			<li>
				<Link to='/test'>Test page</Link>
			</li>
			{!auth.isAuthenticated && (<li>
				<Link to='/login'>Login</Link>
			</li>)}
			{!auth.isAuthenticated && (
				<li>
					<Link to='/register'>Registro</Link>
				</li>)}
			{auth.isAuthenticated && (
				<li className="logout_container">
					<p className="new_name">{auth.user.username}</p>
					<a href='' onClick={logout}>
						Logout
					</a>
				</li>
			)}
		</ul>
	</div>
);

export default connect(store => ({ auth: store.auth }), { logout })(NavBar);
