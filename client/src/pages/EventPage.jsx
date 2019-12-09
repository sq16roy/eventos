import React from 'react';
import ErrorMessage from '../components/ErrorMessage';
import Evento from '../components/Evento';

const EventPage = ({match, getEvento}) => {
    getEvento(match.params.id);

    return(
        <div>
            <ErrorMessage />
            <Evento />
        </div>
    );
};

export default EventPage;
