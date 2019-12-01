import { SET_EVENTO, SET_CURRENT_EVENTO } from '../actions/actionTypes';

export const eventos = (state = [], action) => {
    switch (action.type) {
        case SET_EVENTO:
            return action.eventos;
        default:
            return state;
    }
}
export const currentEvento = (state = {}, action) => {
	switch (action.type) {
		case SET_CURRENT_EVENTO:
			return action.evento;
		default:
			return state;
	}
};