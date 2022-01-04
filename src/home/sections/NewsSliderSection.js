import React from 'react';
import Slider from './slider/Slider';

function NewsSliderSection() {

    document.addEventListener('DOMContentLoaded', function(event) {
        document.getElementById("news_slider_section").setAttribute('onclick', 'location.href = "/news"');
    });

    return (
        <>
            <div id="news_slider_section">
                <Slider />
            </div>
        </>
    );
}

export default NewsSliderSection;