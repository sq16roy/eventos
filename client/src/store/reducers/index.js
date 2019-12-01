import {combineReducers} from 'redux';
import auth from './auth';
import error from './error';
import {eventos, currentEvento} from './eventos';

export default combineReducers({
    error,
    auth,
    eventos,
    currentEvento
})