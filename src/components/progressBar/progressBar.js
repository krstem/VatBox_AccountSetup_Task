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

    const { title, percent, height } = props;
    let progressBarStyle = {
        backgroundColor: '#2AB8FC',
        width: `${percent}%`,
        height: `${height}`,
        borderRadius: `5px`
    };

    return (
        <div className={CLASS_NAMES.PROGRESS_BAR_CONTAINER}>
            <div>
                <h1 className={CLASS_NAMES.PROGRESS_BAR_TITLE}>{title}</h1>
                <div className={CLASS_NAMES.MISSING_PROGRESS_DATA}>{100 - percent}% Missing</div>
            </div>
            <ProgressBarIndicator style={progressBarStyle} />
        </div>
    );
}

export default ProgressBar;