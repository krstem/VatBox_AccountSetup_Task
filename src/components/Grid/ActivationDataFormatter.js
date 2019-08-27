import React from 'react';
import PropTypes from 'prop-types';
import ProgressBarIndicator from '../progressBar/progressBarIndicator';
import {progressBar} from '../Grid/TableData';
import Icon from '../Icon';


const ActivationDataFormatter = ({ row }) => {
    if (row.activationData === progressBar.completed) {
        return <div className="icon-size"><Icon icon='checked.svg' /></div>
    } else if (row.activationData <= progressBar.danger) {
        return <div style={{ "width": "100px" , "margin": "0 auto"}}><ProgressBarIndicator percent={row.activationData} height={'8px'} color={'#fe645f'} /></div>
    } else {
        return <div style={{ "width": "100px" , "margin": "0 auto"}}><ProgressBarIndicator percent={row.activationData} height={'8px'} color={'#ffac1c'} /></div>
    }

};

ActivationDataFormatter.propTypes = {
    row: PropTypes.object,
};

export default ActivationDataFormatter;