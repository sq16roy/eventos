import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getEventos } from '../store/actions';

class ComprarPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carrito: !sessionStorage.getItem('carrito') ? [] : JSON.parse(sessionStorage.getItem('carrito')),
            temCantidad: 0
        };
        this.handleAgregar = this.handleAgregar.bind(this);
        this.setCantidad = this.setCantidad.bind(this);
        this.handleRemover = this.handleRemover.bind(this);
        this.validarAsistentes = this.validarAsistentes.bind(this);
        this.handleSelected = this.handleSelected.bind(this);
    }
    componentDidMount() {
        const { getEventos } = this.props;
        getEventos();
    }

    handleSelected(id) {
        const { history } = this.props;
        history.push(`/evento/${id}`);
    }

    validarAsistentes(element = 0, asistentes, cantidad) {
        if (cantidad > asistentes) {
            window.confirm(`La cantidad de etradas a comprar es mayor a la cantidad de tickets disponibles (disponiles ${asistentes})`);
        } else if(element == asistentes) {
            window.confirm(`Entradas agotadas (disponiles ${0})`);
        }
        return (cantidad > asistentes || element == asistentes) ? false : true;
    }
    handleAgregar(id, nombre, precio, asistentes) {
        const { carrito } = this.state;
        let tempCarrito = [...carrito];
        let objIndex = tempCarrito.findIndex((obj => obj.id == id));
        let cantidad = prompt("Digite la cantidad de etradas a comprar");
        let tempCantida = objIndex == -1 ? 0 : tempCarrito[objIndex].cantidad;

         if (cantidad > 0 && this.validarAsistentes(tempCantida, asistentes, cantidad)){
            if (tempCarrito.length == 0) {
                tempCarrito.push({
                    id,
                    nombre,
                    precio,
                    cantidad,
                    asistentes
                });
                this.setState({
                    carrito:tempCarrito
                },
                ()=> {
                    sessionStorage.setItem('carrito', JSON.stringify(tempCarrito));
                });
            } else {
                if (objIndex == -1) {
                    tempCarrito.push({
                        id,
                        nombre,
                        precio,
                        cantidad,
                        asistentes
                    });
                    this.setState({
                        carrito:tempCarrito
                    },
                    ()=> {
                        sessionStorage.setItem('carrito', JSON.stringify(tempCarrito));
                    });
                } else {
                    tempCarrito[objIndex].cantidad = (Number(carrito[objIndex].cantidad, 10) + Number(cantidad, 10));
                    this.setState({
                        carrito:tempCarrito
                    },
                    ()=> {
                        sessionStorage.setItem('carrito', JSON.stringify(tempCarrito));
                    });
                }
            }
           
        }
    }

    handleRemover(id){
        const { carrito } = this.state;
        let tempCarrito = [...carrito];
        let objIndex = tempCarrito.findIndex((obj => obj.id == id));
        let cantidad = prompt("Digite la cantidad de etradas a comprar");

        if (cantidad > 0) {
            tempCarrito[objIndex].cantidad = Math.max(0, (Number(carrito[objIndex].cantidad, 10) - Number(cantidad, 10)));
            if (tempCarrito[objIndex].cantidad == 0) {
                console.log('here');
                tempCarrito.splice(objIndex, 1);
                console.log(tempCarrito);
            }
            this.setState({
                carrito:tempCarrito
            },
            ()=> {
                sessionStorage.setItem('carrito', JSON.stringify(tempCarrito));
            });
        }
    }

    setCantidad(id){
        const { carrito } = this.state;
        let objIndex = carrito.findIndex((obj => obj.id == id));

        return objIndex == -1 ? 0 : Number(carrito[objIndex].cantidad, 10);
    }

    render() {
        const eventos = this.props.eventos.map((evento) => (
            <tr key={evento._id}>
                <td>{evento.nombre}</td>
                <td>{evento.fecha}</td>
                <td>{evento.hora}</td>
                <td>{evento.precio}</td>
                <td className="ver_btn" onClick={() => this.handleSelected(evento._id)}>Ver</td>
                <td className="ver_btn" onClick={() => this.handleAgregar(evento._id, evento.nombre, evento.precio, evento.cantidadAsistentes)}>Agregar</td>
                <td className="ver_btn" onClick={() => this.handleRemover(evento._id)}>Remover</td>
                <td className="ver_btn">{this.setCantidad(evento._id)}</td>
            </tr>
        ));

        return (
            <Fragment>
                <table className="eventos_name">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Fecha</th>
                            <th>Hora</th>
                            <th>Precio</th>
                            <th>Ver</th>
                            <th>Agregar</th>
                            <th>Remover</th>
                            <th>Tickets</th>
                        </tr>
                    </thead>
                    <tbody>
                        {eventos}
                    </tbody>
                </table>
                <dir className='pagar-eventos'>
                    {this.state.carrito.length <= 0  ? <button disabled>Pagar</button> : <Link to='/eventos/pagos'>Pagar</Link>}
                </dir>
            </Fragment>
        );
    }
}

export default connect((store) => ({ auth: store.auth, eventos: store.eventos }), {
    getEventos,
})(ComprarPage);