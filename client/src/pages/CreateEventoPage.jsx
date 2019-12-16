import React from 'react';
import {Redirect} from 'react-router-dom';
import ErrorMessage from '../components/ErrorMessage';
import CreateEvento from '../components/CreateEvento';

const CreateEventoPage = ({isAuthenticated, userType}) => {
    if (!isAuthenticated || userType !== 'organizador') return <Redirect to="/login" />;

    return(
        <div>
            <ErrorMessage />
            <CreateEvento />
        </div>
    );
};

export default CreateEventoPage;