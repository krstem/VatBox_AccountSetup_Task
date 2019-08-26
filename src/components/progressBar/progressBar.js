import React from 'react';

import ProgressBarIndicator from './progressBarIndicator';

const CLASS_NAMES = {
    PROGRESS_BAR_CONTAINER: 'progress-bar-container',
    PROGRESS_BAR_TITLE: 'progress-bar-title',
    MISSING_PROGRESS_DATA: 'missing-progress-data',
    PROGRESS_BAR_WRAPPER: 'progress-bar-wrapper',
    PROGRESS_INDICATOR: 'progress-indicator'
}

const ProgressBar = (props) => {

    const { title, percent, height, color } = props;

    return (
        <div className={CLASS_NAMES.PROGRESS_BAR_CONTAINER}>
            <div>
                <h1 className={CLASS_NAMES.PROGRESS_BAR_TITLE}>{title}</h1>
                <div className={CLASS_NAMES.MISSING_PROGRESS_DATA}>{100 - percent}% Missing</div>
            </div>
            <ProgressBarIndicator percent={percent} height={height} color={color} />
        </div>
    );
}

export default ProgressBar;