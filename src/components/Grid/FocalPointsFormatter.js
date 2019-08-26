import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';

const FocalPointsFormatter = ({row}) => {
    if(row.focalPoints === 1) {
        return <div className="icon-size"><Icon icon='users.svg' /></div>
    } else {
        return <div className="icon-size"><Icon icon='disabled-users.svg' /></div>
    }
};

FocalPointsFormatter.propTypes = {
    row: PropTypes.object,
};

export default FocalPointsFormatter;