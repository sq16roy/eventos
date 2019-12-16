import React, { Component } from 'react';
import {
	formatCreditCardNumber,
	formatCVC,
	formatExpirationDate,
} from '../Util';
import Card from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

class PAgosPage extends Component {
	state = {
		number: '',
		name: '',
		expiry: '',
		cvc: '',
		issuer: '',
		focused: '',
		formData: null,
	};

	handleCallback = ({ issuer }, isValid) => {
		if (isValid) {
			this.setState({ issuer });
		}
	};

	handleInputFocus = ({ target }) => {
		this.setState({
			focused: target.name,
		});
	};

	handleInputChange = ({ target }) => {
		if (target.name === 'number') {
			target.value = formatCreditCardNumber(target.value);
		} else if (target.name === 'expiry') {
			target.value = formatExpirationDate(target.value);
		} else if (target.name === 'cvc') {
			target.value = formatCVC(target.value);
		}

		this.setState({ [target.name]: target.value });
	};

	handleSubmit = e => {
		e.preventDefault();
		const formData = [...e.target.elements]
			.filter(d => d.name)
			.reduce((acc, d) => {
				acc[d.name] = d.value;
				return acc;
			}, {});

		this.setState({ formData },
			() => {
				sessionStorage.setItem('carrito', []);
				window.location.href = '/eventos/comprar';
			}
		);
		this.form.reset();
	};

	render() {
		const { name, number, expiry, cvc, focused, issuer, formData } = this.state;
		let total = 0;
		JSON.parse(sessionStorage.getItem('carrito')).forEach((e) => {
			total = total + (e.precio * e.cantidad);
		})
		return (
			<div key="Payment">
				<div className="App-payment">
					<h1 className="flex-1002">Pagar</h1>

					<ul>
						{JSON.parse(sessionStorage.getItem('carrito')).map((e) => {
							return <li className="liFull" >{`Evento: ${e.nombre} Precio: ₡ ${e.precio} Tickets: ${e.cantidad}`}</li>
						})}
					</ul>
					<h4 className="liFull2" >{`Total: ₡ ${total - ((total * 15) / 100)}`}</h4>
					<Card
						number={number}
						name={name}
						expiry={expiry}
						cvc={cvc}
						focused={focused}
						callback={this.handleCallback}
					/>
					<form className="flex-100" ref={c => (this.form = c)} onSubmit={this.handleSubmit}>
						<div className="">
							<input
								type="tel"
								name="number"
								className="inputPlace"
								placeholder="Card Number"
								pattern="[\d| ]{16,22}"
								required
								onChange={this.handleInputChange}
								onFocus={this.handleInputFocus}
							/>
							<div>E.g.: 49..., 51..., 36..., 37...</div>
						</div>
						<div className="">
							<input
								type="text"
								name="name"
								className=""
								placeholder="Name"
								required
								onChange={this.handleInputChange}
								onFocus={this.handleInputFocus}
							/>
						</div>
						<div className="">
							<div className="creditCardInputs">
								<input
									type="tel"
									name="expiry"
									className="form-control"
									placeholder="Valid Thru"
									pattern="\d\d/\d\d"
									required
									onChange={this.handleInputChange}
									onFocus={this.handleInputFocus}
								/>
							</div>
							<div className="">
								<input
									type="tel"
									name="cvc"
									className="form-control"
									placeholder="CVC"
									pattern="\d{3,4}"
									required
									onChange={this.handleInputChange}
									onFocus={this.handleInputFocus}
								/>
							</div>
						</div>
						<input type="hidden" name="issuer" value={issuer} />
						<div className="">
							<button className="pagarBtn">Pagar</button>
						</div>
					</form>
				</div>

			</div>
		);
	}
}
export default PAgosPage;