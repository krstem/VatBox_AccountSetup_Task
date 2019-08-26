import React from 'react';
import cx from 'classnames';

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

function slideRight() {
    const firstElement = document.getElementsByClassName('sliding-element-1')[0];
    const secondElement = document.getElementsByClassName('sliding-element-2')[0];
    firstElement.style.left = `-558px`;
    secondElement.style.left = `0`;
}

function slideLeft() {
    const firstElement = document.getElementsByClassName('sliding-element-1')[0];
    const secondElement = document.getElementsByClassName('sliding-element-2')[0];
    secondElement.style.left = `-${558 * 2}px`;
    firstElement.style.left = `0`;
}

const ActionSlider = (props) => {

    return (
        <div className={CLASS_NAMES.SLIDER_CONTAINER}>
            {/* sliding div */}
            <div className={cx(CLASS_NAMES.SLIDING_ELEMENT, `${CLASS_NAMES.SLIDING_ELEMENT}-1`)}>
                <div className={CLASS_NAMES.SLIDER_HEADER}>
                    <div className={CLASS_NAMES.SLIDER_TITLE}>Call for Action #1</div>
                    <div className={CLASS_NAMES.SLIDER_ICONS_WRAPPER}>
                        <div className={CLASS_NAMES.SLIDER_RIGHT_ARROW}
                            onClick={slideRight}> <Icon icon={'arrow-down.svg'} /> </div>
                    </div>
                </div>
                <p className={CLASS_NAMES.SLIDER_TEXT}>Exiting the method early if we are at the end of the images array.
               We also want to reset currentIndex and translateValue, so we return to the first image in the array.</p>
                <div>Lorem ipsum now</div>
            </div>
            {/* end sliding div */}

            {/* sliding div */}
            <div className={cx(CLASS_NAMES.SLIDING_ELEMENT, `${CLASS_NAMES.SLIDING_ELEMENT}-2`)}>
                <div className={CLASS_NAMES.SLIDER_HEADER}>
                    <div className={CLASS_NAMES.SLIDER_TITLE}>Call for Action #2</div>
                    <div className={CLASS_NAMES.SLIDER_ICONS_WRAPPER}>
                        <div className={CLASS_NAMES.SLIDER_LEFT_ARROW}
                            onClick={slideLeft}>
                            <Icon icon={'arrow-down.svg'} />
                        </div>
                    </div>
                </div>
                <p className={CLASS_NAMES.SLIDER_TEXT}>Lorem Ipsum: usage Lorem ipsum is a pseudo-Latin text used in web design,
                typography, layout, and printing in place of English to emphasise design elements over content.</p>
                <div>Lorem ipsum now</div>
            </div>
            {/* end sliding div */}
        </div>
    );
}

export default ActionSlider;