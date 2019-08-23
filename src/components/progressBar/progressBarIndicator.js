import React from 'react';

const CLASS_NAMES = {
    PROGRESS_BAR_WRAPPER: 'progress-bar-wrapper',
    PROGRESS_INDICATOR: 'progress-indicator'
}

const ProgressBarIndicator = (props) => {

    return (
        <div className={CLASS_NAMES.PROGRESS_INDICATOR}>
            <div className={CLASS_NAMES.PROGRESS_BAR_WRAPPER}>
                <div style={props.style}>
                    {/* ADD WIDTH BASED ON THE PERCENTAGE */}
                </div>
            </div>
        </div>
    );
}

export default ProgressBarIndicator;