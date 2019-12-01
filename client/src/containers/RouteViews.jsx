import React from 'react';
import {connect} from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import AuthPage from '../pages/AuthPage';
import TestPage from '../pages/TestPage';
import HomePage from '../pages/HomePage';
import {getCurrentEvento} from '../store/actions';
import EventPage from '../pages/EventPage';
import CreateEventoPage from '../pages/CreateEventoPage';

const RouterViews = ({ auth, getCurrentEvento }) => (
	<main>
		<Switch>
			<Route exact path='/' render={(props) => <HomePage {...props} />} />
			<Route
				exact
				path='/login'
				render={() => <AuthPage authType='login' isAuthenticated={auth.isAuthenticated} />}
			/>
			<Route
				exact
				path='/register'
				render={() => <AuthPage authType='register' isAuthenticated={auth.isAuthenticated} />}
			/>
			<Route exact path='/test' render={() => <TestPage />} />
			<Route exact path='/evento/:id' render={(props) => <EventPage getEvento={id => getCurrentEvento(id)} {...props}/>} />
			<Route exact path='/eventos/nuevo' render={() => <CreateEventoPage isAuthenticated={auth.isAuthenticated} />} />
		</Switch>
	</main>
);

export default withRouter(
	connect((store) => ({ auth: store.auth }), { getCurrentEvento })(RouterViews)
);