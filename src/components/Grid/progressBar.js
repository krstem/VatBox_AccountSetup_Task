import React from 'react';

const CLASS_NAMES = {
    PROGRESS_BAR_CONTAINER: 'progress-bar-container',
    PROGRESS_BAR_TITLE: 'progress-bar-title',
    MISSING_PROGRESS_DATA: 'missing-progress-data',
    PROGRESS_BAR_WRAPPER: 'progress-bar-wrapper',
    PROGRESS_INDICATOR: 'progress-indicator'
}

const ProgressBar = (props) => {

    const { percent } = props;
    let progressBarStyle = {
        backgroundColor: `${props.color}`,
        width:  `${props.percent}%`,
        height: `8px`,
        borderRadius: `5px`
    };

    return (
        <div className={CLASS_NAMES.PROGRESS_BAR_CONTAINER}>
            <div className={CLASS_NAMES.PROGRESS_INDICATOR}>
                <div className={CLASS_NAMES.PROGRESS_BAR_WRAPPER}>
                    <div style={progressBarStyle}>
                        {/* ADD WIDTH BASED ON THE PERCENTAGE */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProgressBar;