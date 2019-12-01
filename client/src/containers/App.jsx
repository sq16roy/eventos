import React from 'react';
import {Provider} from 'react-redux';
import decode from 'jwt-decode';
import api from '../services/api';
import {store} from '../store';
import {setToken, setCurrentUser, addError} from '../store/actions';
import {SET_CURRENT_USER} from '../store/actions/actionTypes';

if (localStorage.jwtToken) {
    setToken(localStorage.jwtToken);
    try {
        store.dispatch(setCurrentUser(decode(localStorage.jwtToken)));
    } catch (err) {
        store.dispatch(setCurrentUser({}));
        store.dispatch(addError(err));
    }
}
const App = () => (
    <Provider store={store}>
        <div>hola</div>
    </Provider>
);


export default App;