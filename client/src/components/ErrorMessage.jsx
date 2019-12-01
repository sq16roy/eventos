import React from 'react';
import {connect} from 'react-redux';

const ErrorMessage = ({ error }) => (
    console.log(error),
    <div>
        {error && <div>{error.message}</div>}
    </div>
);

export default connect(store => ({error: store.error}))(ErrorMessage);