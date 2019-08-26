import React from 'react';
import PropTypes from 'prop-types';
import ProgressBarIndicator from '../progressBar/progressBarIndicator';
import Icon from '../Icon';


const ActivationDataFormatter = ({ row }) => {
    if (row.activationData === 100) {
        return <div className="icon-size"><Icon icon='checked.svg' /></div>
    }

    if (row.activationData <= 50) {
        return <div style={{ "width": "100px" , "margin": "0 auto"}}><ProgressBarIndicator percent={row.activationData} height={'8px'} color={'#fe645f'} /></div>
    }

    if (row.activationData > 50) {
        return <div style={{ "width": "100px" , "margin": "0 auto"}}><ProgressBarIndicator percent={row.activationData} height={'8px'} color={'#ffac1c'} /></div>
    }
};

ActivationDataFormatter.propTypes = {
    row: PropTypes.object,
};

export default ActivationDataFormatter;