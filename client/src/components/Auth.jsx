import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { authUser, logout } from '../store/actions';

class Auth extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			tipo: 'cliente'
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.renderRegister = this.renderRegister.bind(this);
		this.renderLogin = this.renderLogin.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	
	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}
	handleSubmit(e) {
		const { genero, email, password, username, tipo, segundoNombre, nombreEmpresa, nombreComercial, cedulaJuridica,
			fechaInicio, annoExperiencia, primerApellido, segundoApellido, fechaNacimiento, edad, provincia,
			direccion, eventoFavorito } = this.state;
		const { authType } = this.props;

		e.preventDefault();
		this.props.authUser(authType || 'login', { genero, email, password, username, tipo, segundoNombre, nombreEmpresa, nombreComercial, cedulaJuridica,
			fechaInicio, annoExperiencia, primerApellido, segundoApellido, fechaNacimiento, edad, provincia,
			direccion, eventoFavorito });
	}
	renderLogin() {
		const { email, password } = this.state;

		return (
			<Fragment>
				<div>
					<label htmlFor='email'>Correo</label>
					<input required autoComplete="off" type='email' value={email} name='email' onChange={this.handleChange} />
				</div>

				<div>
					<label htmlFor='password'>Contraseña</label>
					<input required autoComplete="off" type='password' value={password} name='password' onChange={this.handleChange} />
				</div>
			</Fragment>
		);
	}
	renderRegister() {
		const { genero, email, password, username, tipo, segundoNombre, nombreEmpresa, nombreComercial, cedulaJuridica,
			fechaInicio, annoExperiencia, primerApellido, segundoApellido, fechaNacimiento, edad, provincia,
			direccion, eventoFavorito } = this.state;
		const options = ['Cliente', 'Organizador', 'Provedor'];

		return (
			<Fragment>
				
				<div>
					<label htmlFor="tipo"></label>
					<select className="tipo_slt" name="tipo" id="" onChange={this.handleChange} value={tipo}>
						{options.map((op, i) => <option key={i} value={op.toLocaleLowerCase()}>{op}</option>)}
					</select>
				</div>
				{this.state.tipo !== "cliente" && <Fragment>
					<div className="inputBox">
						<label htmlFor="txtNombreEmpresa">Nombre de la empresa<span className="required"> *</span></label>
						<input className="requiredInput" type="text" id="txtNombreEmpresa" required value={username} name='username' onChange={this.handleChange} />
					</div>

					<div className="inputBox">
						<label htmlFor="txtNombreComercial">Nombre comercial<span className="required"> *</span></label>
						<input className="requiredInput" type="text" id="txtNombreComercial" required value={primerApellido} name='primerApellido' onChange={this.handleChange} />
					</div>

					<div className="inputBox">
						<label htmlFor="nCedulaJ">Cédula jurídica<span className="required"> *</span></label>
						<input className="requiredInput" type="number" id="nCedulaJ" required value={cedulaJuridica} name='cedulaJuridica' onChange={this.handleChange} />
					</div>

					<div className="inputBox">
						<label htmlFor="dtInicio">Fecha de inicio de la empresa<span className="required"> *</span></label>
						<input className="requiredInput" type="date" id="dtExperiencia" required value={fechaNacimiento} name='fechaNacimiento' onChange={this.handleChange} />
						<label htmlFor="numEdad">Años de experiencia:</label>
						<input type="number" name="Edad" id="edadCalculada" readOnly value={annoExperiencia} name='annoExperiencia' onChange={this.handleChange} />
					</div>

				</Fragment>}
				{this.state.tipo == "cliente" && <Fragment>
					<div className="inputBox">
						<label htmlFor="txtNombre1">Primer Nombre<span className="required"> *</span></label>
						<input className="requiredInput" type="text" id="txtNombre1" required value={username} name='username' onChange={this.handleChange} />
						<label htmlFor="txtNombre2">Segundo Nombre</label>
						<input className="noRequiredInput" type="text" id="txtNombre2" value={segundoNombre} name='segundoNombre' onChange={this.handleChange} />
					</div>

					<div className="inputBox">
						<label htmlFor="txtApellido1">Primer Apellido<span className="required"> *</span></label>
						<input className="requiredInput" type="text" id="txtApellido1" required value={primerApellido} name='primerApellido' onChange={this.handleChange} />
						<label htmlFor="txtApellido2">Segundo Apellido</label>
						<input className="noRequiredInput" type="text" id="txtApellido2"  value={segundoApellido} name='segundoApellido' onChange={this.handleChange} />
					</div>

					<div className="inputBox">
						<label htmlFor="dtFechaNac">Fecha de nacimiento<span className="required"> *</span></label>
						<input className="requiredInput" type="date" id="dtFechaNac" required value={fechaNacimiento} name='fechaNacimiento' onChange={this.handleChange} />
						<label htmlFor="numEdad">Edad:</label>
						<input type="number" name="Edad" id="edadCalculada" required readOnly value={edad} name='edad' onChange={this.handleChange} />
						<p className="error" id="usuarioMenor">El usuario tiene que ser mayor de 18 años</p>
					</div>

					<div >
						<label id="rGenero">Género</label>
						<div className="inputBox1">

							<div className="no_especificar1">
								<label>Femenino</label>
								<input type="radio" value="femenino" id="femenino" name='genero' onChange={this.handleChange} />
							</div>
							<div className="no_especificar">
								<label>Masculino</label>
								<input type="radio" value="masculino" id="masculino" name='genero' onChange={this.handleChange} />
							</div>
							<div className="no_especificar">
								<label>Prefiero no especificar</label>
								<input type="radio" value="no" id="no" name='genero' onChange={this.handleChange} />
							</div>
						</div>
						<div>
							<label>Otro</label>
							<input className="txtOtro" id="txtOtro" value={genero} name='genero' onChange={this.handleChange}></input>
						</div>
					</div>
				</Fragment>}

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

				<div className="inputBox">
					<label htmlFor="email">Correo Electrónico<span className="required"> *</span></label>
					<input className="requiredInput" type="email" id="email" required value={email} name='email' onChange={this.handleChange} />
					<label htmlFor="password">Contraseña<span className="required"> *</span></label>
					<input type="password" className="requiredInput" id="txtPassword" required value={password} name='password' onChange={this.handleChange} />
				</div>

				{this.state.tipo == "cliente" && <div className="inputBox">

					<label htmlFor="cbEventos">Tipos de eventos favoritos:</label>
					<div className="inputBox1">

						<div className="no_especificar2">
							<label>Conciertos</label>
							<input type="checkbox" value="concierto" id="concierto" name='eventoFavorito' onChange={this.handleChange} />
						</div>

						<div className="no_especificar">
							<label>Deportes</label>
							<input type="checkbox" value="deporte" id="deporte" name='eventoFavorito' onChange={this.handleChange} />
						</div>

						<div className="no_especificar">
							<label>Teatro</label>
							<input type="checkbox" value="teatro" id="teatro" name='eventoFavorito' onChange={this.handleChange} />
						</div>

						<div className="no_especificar">
							<label>Otros</label>
							<input type="checkbox" value="otro" id="otro" value={eventoFavorito} name='eventoFavorito' onChange={this.handleChange} />
						</div>


					</div>
				</div>}
			</Fragment >
		);
	}

	render() {
		const { authType } = this.props;

		return (
			<Fragment>
				<h3 className="main_title">{authType == 'login' ? "Iniciar Sesión" : "Registrarse"}</h3>
				<form className="login_form" onSubmit={this.handleSubmit}>
					{authType == "login" && this.renderLogin()}
					{authType !== "login" && this.renderRegister()}
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