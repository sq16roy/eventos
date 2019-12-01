import React from 'react';
import ErrorMessage from '../components/ErrorMessage';
import Evento from '../components/Evento';

const EventPage = ({match, getEvento}) => {
    const host = window.location.href;
    getEvento(match.params.id);

    return(
        <div>
            <ErrorMessage />
            <Evento />
        </div>
    );
};

export default EventPage;
