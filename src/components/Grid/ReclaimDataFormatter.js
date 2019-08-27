import React from 'react';
import PropTypes from 'prop-types';
import ProgressBarIndicator from '../progressBar/progressBarIndicator';
import {progressBar} from '../Grid/TableData';
import Icon from '../Icon';

const ReclaimDataFormatter = ({row}) => {
    if (row.reclaimData === progressBar.completed) {
        return <div className="icon-size"><Icon icon='checked.svg' /></div>
    } else if (row.reclaimData <= progressBar.danger) {
        return <div style={{ "width": "100px" , "margin": "0 auto"}}><ProgressBarIndicator percent={row.reclaimData} height={'8px'} color={'#fe645f'} /></div>
    } else {
        return <div style={{ "width": "100px" , "margin": "0 auto"}}><ProgressBarIndicator percent={row.reclaimData} height={'8px'} color={'#ffac1c'} /></div>
    }
};

ReclaimDataFormatter.propTypes = {
    row: PropTypes.object,
};

export default ReclaimDataFormatter;