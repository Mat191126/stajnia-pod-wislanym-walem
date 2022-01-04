import React from 'react';
import Slider from './slider/Slider';

function NewsSliderSection() {

    return (
        <>
            <div id="news_slider_section">
                <a id='link-to-news' href='/news'></a>
                <Slider />
            </div>
        </>
    );
}

export default NewsSliderSection;