import React from 'react';
import PropTypes from 'prop-types';
import ProgressBar from './progressBar';
import Icon from '../Icon';


const ActivationDataFormatter = ({row}) => {
    if(row.activationData === 100) {
        return <div className="icon-size"><Icon icon='checked.svg' /></div> 
    }

    if(row.activationData <= 50) {
        return <div style={{"width": "50%"}}><ProgressBar percent={row.activationData} color={'#fe645f'}/></div>
    }

    if(row.activationData > 50) {
        return <div style={{"width": "50%"}}><ProgressBar percent={row.activationData} color={'#ffac1c'}/></div>
    }
};

ActivationDataFormatter.propTypes = {
    row: PropTypes.object,
};

export default ActivationDataFormatter;