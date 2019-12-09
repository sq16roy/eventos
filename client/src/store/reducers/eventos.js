import { SET_EVENTO, SET_CURRENT_EVENTO, SET_lUGAR, SET_lUGARES } from '../actions/actionTypes';

export const eventos = (state = [], action) => {
    switch (action.type) {
        case SET_EVENTO:
            return action.eventos;
        default:
            return state;
    }
}
export const lugar = (state = [], action) => {
    switch (action.type) {
        case SET_lUGAR:
            return action.lugar;
        default:
            return state;
    }
}
export const lugares = (state = [], action) => {
    switch (action.type) {
        case SET_lUGARES:
            return action.lugares;
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