import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { authUser, logout } from '../store/actions';

class Auth extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			tipo:'cliente'
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}
	handleSubmit(e) {
		const { email, password, username, tipo } = this.state;
		const { authType } = this.props;

		e.preventDefault();
		this.props.authUser(authType || 'login', { email, password, username, tipo });
	}

	render() {
		const { email, password, username, tipo } = this.state;
		const { authType } = this.props;
		const options = ['Cliente', 'Orga'];

		return (
			<Fragment>
				<form className="login_form" onSubmit={this.handleSubmit}>
					{authType !== 'login' && <Fragment>
						<label htmlFor='username'>Nombre</label>
						<input required autoComplete="off" type='text' value={username} name='username' onChange={this.handleChange} />
					</Fragment>}
					<div>
						<label htmlFor='email'>Correo</label>
						<input required autoComplete="off" type='email' value={email} name='email' onChange={this.handleChange} />
					</div>

					<div>
						<label htmlFor='password'>Contraseña</label>
						<input required autoComplete="off" type='password' value={password} name='password' onChange={this.handleChange} />
					</div>
					{authType !== 'login' && <Fragment>
					<div>
						<label htmlFor="tipo"></label>
						<select name="tipo" id="" onChange={this.handleChange} value={tipo}>
							{options.map((op, i) => <option key={i} value={op.toLocaleLowerCase()}>{op}</option>)}
						</select>
					</div>
					</Fragment>}
					<button className="login_btn" type='submit'>{authType == 'login' ? 'Ingresar' : 'Registrar'}</button>
				</form>
			</Fragment>
		);
	}
}

export default connect(
	() => ({}),
	{ authUser, logout }
)(Auth);