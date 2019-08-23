import React from 'react';

import ProgressBar from './progressBar';
import ActionSlider from './actionSlider';

const CLASS_NAMES = {
    PROGRESS_BAR_MAIN_CONTAINER: 'progress-bar-main-container'
}

const ProgressBarContainer = (props) => {

    return (
        <div className={CLASS_NAMES.PROGRESS_BAR_MAIN_CONTAINER}>
            <ProgressBar title={`Activation Data`} percent={85} height={'10px'} />
            <ProgressBar title={`Payment Setup`} percent={79} height={'10px'} />
            <ProgressBar title={`Reclaim Data`} percent={78} height={'10px'} />
            <ActionSlider />
        </div>
    );
}

export default ProgressBarContainer;