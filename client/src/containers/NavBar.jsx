import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../store/actions';

const NavBar = ({ auth, logout }) => (
	<div>
		<ul>
			<li>
				<Link to='/'>Inicio</Link>
			</li>
			<li>
				<Link to='/test'>Test page</Link>
			</li>
			<li>
				<Link to='/login'>Login</Link>
			</li>
			<li>
				<Link to='/register'>Registro</Link>
			</li>
			{auth.isAuthenticated && (
				<li>
					<a href='' onClick={logout}>
						Logout
					</a>
				</li>
			)}
		</ul>
		{auth.isAuthenticated && <p>{auth.user.username}</p>}
	</div>
);

export default connect(store => ({auth: store.auth}),{logout})(NavBar);
