import React from 'react';

import ProgressBar from './progressBar';
import ActionSlider from './actionSlider';

const CLASS_NAMES = {
    PROGRESS_BAR_MAIN_CONTAINER: 'progress-bar-main-container'
}

const ProgressBarContainer = (props) => {

    let height = '10px';
    let color = '#2AB8FC';

    return (
        <div className={CLASS_NAMES.PROGRESS_BAR_MAIN_CONTAINER}>
            <ProgressBar title={`Activation Data`} percent={85} height={height} color={color} />
            <ProgressBar title={`Payment Setup`} percent={79} height={height} color={color} />
            <ProgressBar title={`Reclaim Data`} percent={78} height={height} color={color} />
            <ActionSlider />
        </div>
    );
}

export default ProgressBarContainer;