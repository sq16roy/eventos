import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { authUser, logout } from '../store/actions';

class Auth extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        });
    }
	handleSubmit(e) {
        const { email, password, username } = this.state;
        const {authType} = this.props;
        
		e.preventDefault();
        this.props.authUser(authType || 'login', { email, password, username });
    }

	render() {
		const { email, password, username } = this.state;
		const {authType} = this.props;
		return (
			<Fragment>
				<form onSubmit={this.handleSubmit}>
					{authType !== 'login' && <Fragment>
						<label htmlFor='username'>Nombre</label>
						<input autoComplete="off" type='text' value={username} name='username' onChange={this.handleChange} />
					</Fragment>}
					<label htmlFor='email'>Correo</label>
					<input autoComplete="off" type='text' value={email} name='email' onChange={this.handleChange} />
					<label htmlFor='password'>Contraseña</label>
					<input autoComplete="off" type='password' value={password} name='password' onChange={this.handleChange} />
					<button type='submit'>{authType == 'login' ? 'Ingresar' : 'Registrar'}</button>
				</form>
			</Fragment>
		);
	}
}

export default connect(
    () => ({}),
    {authUser, logout}
)(Auth);