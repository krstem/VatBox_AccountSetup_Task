import React from 'react';

import Icon from '../Icon';

const CLASS_NAMES = {
    SLIDER_WRAPPER: 'slider-wrapper',
    SLIDER_CONTAINER: 'slider-container',
    SLIDER_HEADER: 'slider-header',
    SLIDER_TITLE: 'slider-title',
    SLIDER_TEXT: 'slider-text',
    SLIDER_ICONS_WRAPPER: 'slider-icons-wrapper',
    SLIDER_LEFT_ARROW: 'slider-left-arrow',
    SLIDER_RIGHT_ARROW: 'slider-right-arrow',
    SLIDING_ELEMENT: 'sliding-element'
}

function addAnimationClass() {
    console.log('test', test);
}

const ActionSlider = (props) => {

    return (
        <div className={CLASS_NAMES.SLIDER_CONTAINER}>
            {/* sliding div */}
            <div className={CLASS_NAMES.SLIDING_ELEMENT}>
                <div className={CLASS_NAMES.SLIDER_HEADER}>
                    <div className={CLASS_NAMES.SLIDER_TITLE}>Call for Action #1</div>
                    <div className={CLASS_NAMES.SLIDER_ICONS_WRAPPER}>
                        <div className={CLASS_NAMES.SLIDER_LEFT_ARROW}> <Icon icon={'arrow-down.svg'} /> </div>
                        <div className={CLASS_NAMES.SLIDER_RIGHT_ARROW}
                            onClick={addAnimationClass}> <Icon icon={'arrow-down.svg'} /> </div>
                    </div>
                </div>
                <p className={CLASS_NAMES.SLIDER_TEXT}>Exiting the method early if we are at the end of the images array.
               We also want to reset currentIndex and translateValue, so we return to the first image in the array.</p>
                <div>Lorem ipsum now</div>
            </div>
            {/* end sliding div */}

            {/* sliding div */}
            <div className={CLASS_NAMES.SLIDING_ELEMENT}>
                <div className={CLASS_NAMES.SLIDER_HEADER}>
                    <div className={CLASS_NAMES.SLIDER_TITLE}>Call for Action #2</div>
                    <div className={CLASS_NAMES.SLIDER_ICONS_WRAPPER}>
                        <div className={CLASS_NAMES.SLIDER_LEFT_ARROW}>
                            <Icon icon={'arrow-down.svg'} />
                        </div>
                        <div className={CLASS_NAMES.SLIDER_RIGHT_ARROW}>
                            <Icon icon={'arrow-down.svg'} />
                        </div>
                    </div>
                </div>
                <p className={CLASS_NAMES.SLIDER_TEXT}>Exiting the method early if we are at the end of the images array.
               We also want to reset currentIndex and translateValue, so we return to the first image in the array.</p>
                <div>Lorem ipsum now</div>
            </div>
            {/* end sliding div */}
        </div>
    );
}

export default ActionSlider;