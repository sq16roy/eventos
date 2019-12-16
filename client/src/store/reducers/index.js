import {combineReducers} from 'redux';
import { auth  } from './auth';
import error from './error';
import {eventos, currentEvento, lugar, lugares} from './eventos';

export default combineReducers({
    error,
    eventos,
    currentEvento,
    lugar,
    lugares,
    auth,
})