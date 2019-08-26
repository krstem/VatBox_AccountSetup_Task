import React from 'react';
import PropTypes from 'prop-types';
import ProgressBar from './progressBar';
import Icon from '../Icon';


const ReclaimDataFormatter = ({row}) => {
    if(row.reclaimData === 100) {
        return <div className="icon-size"><Icon icon='checked.svg' /></div> 
    }

    if(row.reclaimData <= 50) {
        return <div style={{"width": "90%"}}><ProgressBar percent={row.activationData} color={'#fe645f'}/></div>
    }

    if(row.reclaimData > 50) {
        return <div style={{"width": "90%"}}><ProgressBar percent={row.activationData} color={'#ffac1c'}/></div>
    }
};

ReclaimDataFormatter.propTypes = {
    row: PropTypes.object,
};

export default ReclaimDataFormatter;