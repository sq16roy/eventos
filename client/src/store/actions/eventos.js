import api from '../../services/api';
import {SET_EVENTO , SET_CURRENT_EVENTO} from '../actions/actionTypes';
import { addError, removeError } from './error';

export const setEventos = (eventos) => ({
    type: SET_EVENTO,
    eventos
});
export const setCurrentEvento = (evento) => ({
	type: SET_CURRENT_EVENTO,
	evento
});

export const getEventos = () => {
    return async dispatch => {
        try {
            const eventos = await api.call('get', 'eventos');
            dispatch(setEventos(eventos));
            dispatch(removeError());
        } catch (err) {
            const error = err.response.data;
            dispatch(addError(error.message));
        }
    }
};
export const getUserEventos = () => {
	return async (dispatch) => {
		try {
			const eventos = await api.call('get', 'eventos/user');
			dispatch(setEventos(eventos));
			dispatch(removeError());
		} catch (err) {
			const error = err.response.data;
			dispatch(addError(error.message));
		}
	};
};
export const createEvento = (data) => {
	return async (dispatch) => {
		try {
			const evento = await api.call('post', 'eventos', data);
			dispatch(setCurrentEvento(evento));
			dispatch(removeError());
		} catch (err) {
			const error = err.response.data;
            dispatch(addError(error.err));
		}
	};
};
export const getCurrentEvento = (id) => {
	return async (dispatch) => {
		try {
			const evento = await api.call('get', `eventos/${id}`);
			dispatch(setCurrentEvento(evento));
			dispatch(removeError());
		} catch (err) {
			const error = err.response.data;
			dispatch(addError(error.message));
		}
	};
};
export const deleteEvento = (id) => {
	return async (dispatch) => {
		try {
			const evento = await api.call('delete', `eventos/${id}`, {id});
			dispatch(setCurrentEvento({}));
			dispatch(removeError());
		} catch (err) {
			const error = err.response.data;
            dispatch(addError(error.err));
		}
	};
};

