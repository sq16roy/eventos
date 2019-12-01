import React from 'react';
import Eventos from '../components/Eventos';
import ErrorMessage from '../components/ErrorMessage';

const HomePage = (props) => (
	<div>
        <ErrorMessage />
		<Eventos {...props}/>
	</div>
);

export default HomePage;
