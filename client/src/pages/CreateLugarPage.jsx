import React from 'react';
import {Redirect} from 'react-router-dom';
import ErrorMessage from '../components/ErrorMessage';
import CreateLugar from '../components/CreateLugar';

const CreateLugarPage = ({isAuthenticated}) => {
    if (!isAuthenticated) return <Redirect to="/login" />;

    return(
        <div>
            <ErrorMessage />
            <CreateLugar />
        </div>
    );
};

export default CreateLugarPage;