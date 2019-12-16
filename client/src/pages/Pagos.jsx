import React from 'react';
import {Redirect} from 'react-router-dom';
import ErrorMessage from '../components/ErrorMessage';
import PAgosPage from '../components/Pago';

const Pagos = ({isAuthenticated, userType}) => {
    if (!isAuthenticated || userType !== 'cliente') return <Redirect to="/login" />;

    return(
        <div>
            <ErrorMessage />
            <PAgosPage />
        </div>
    );
};

export default Pagos;