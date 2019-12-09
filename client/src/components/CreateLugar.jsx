import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createEvento } from '../store/actions';

class CreateLugar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit(e) {
        const {
            nombre,
        } = this.state;

        e.preventDefault();
        this.props.createEvento({
            nombre,
        });
        this.setState({
            nombre: '',
        });
    }

    render() {
        const {
           nombre,
        } = this.state;

        return (
            <div className="crete_event_form_container">
                <form className="crete_event_form" onSubmit={this.handleSubmit}>
                    <button className="submit_btn" type="submit">Crear</button>
                </form>
            </div>
        );
    }
}

export default connect(store => ({}), { createEvento })(CreateLugar);