import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const PageTitle = ({ title }) => {

    const history = useHistory();

    return (
        <div>
            <h1>{title}</h1>
            <div>
                <button className='btn btn-primary' onClick={history.goBack}>Back</button>
            </div>
        </div>
    )
}

PageTitle.propTypes = {
    title: PropTypes.string
}

export default PageTitle
