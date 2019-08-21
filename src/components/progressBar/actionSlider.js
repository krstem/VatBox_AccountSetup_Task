import React from 'react';

const CLASS_NAMES = {
    SLIDER_CONTAINER: 'slider-container',
    SLIDER_HEADER: 'slider-header',
    SLIDER_TITLE: 'slider-title',
    SLIDER_TEXT: 'slider-text'
}

const ActionSlider = (props) => {

    return (
        <div className={CLASS_NAMES.SLIDER_CONTAINER}>
            <div className={CLASS_NAMES.SLIDER_HEADER}>
                <div className={CLASS_NAMES.SLIDER_TITLE}>Call for Action</div>
                <div>
                    <div> {/* left arrow */} </div>
                    <div> {/* right arrow */} </div>
                </div>
            </div>
            <p className={CLASS_NAMES.SLIDER_TEXT}>Exiting the method early if we are at the end of the images array.
               We also want to reset currentIndex and translateValue, so we return to the first image in the array.</p>
            <div>Lorem ipsum now</div>
        </div>
    );
}

export default ActionSlider;