import {SET_CURRENT_USER} from '../actions/actionTypes';

const DEFAULT_STATE = {
    isAuthenticated: false,
    user: {},
}

export const auth = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                isAuthenticated : !!Object.keys(action.user).length,
                user: action.user
            };
        default:
            return state;
    }
}
