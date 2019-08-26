import React from 'react';

const CLASS_NAMES = {
    PROGRESS_BAR_WRAPPER: 'progress-bar-wrapper',
    PROGRESS_INDICATOR: 'progress-indicator'
}

const ProgressBarIndicator = (props) => {
    const { percent, height, color } = props;

    let progressBarStyle = {
        backgroundColor: `${color}`,
        width: `${percent}%`,
        height: `${height}`,
        borderRadius: `5px`
    };

    return (
        <div className={CLASS_NAMES.PROGRESS_INDICATOR}>
            <div className={CLASS_NAMES.PROGRESS_BAR_WRAPPER}>
                <div style={progressBarStyle}>
                    {/* ADD WIDTH BASED ON THE PERCENTAGE */}
                </div>
            </div>
        </div>
    );
}

export default ProgressBarIndicator;