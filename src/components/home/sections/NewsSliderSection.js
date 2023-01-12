import React from 'react';
import NewsSlider from './newsSlider/NewsSlider';

function NewsSliderSection() {

    return (
        <>
            <div id="news_slider_section">
                <a id='link-to-news' href='/news'> </a>
                <NewsSlider />
            </div>
        </>
    );
}

export default NewsSliderSection;