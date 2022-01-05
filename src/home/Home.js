import React from 'react';
import AboutSection from "./sections/AboutSection";
import CuriositySection from "./sections/CuriositySection";
import AnimalsSection from "./sections/AnimalsSection";
import NewsSliderSection from "./sections/NewsSliderSection";

function Home() {

    document.addEventListener('DOMContentLoaded', function(event) {
        document.querySelector('video').playbackRate = 0.5;
    });

    return (
        <>
            <div id="content">
                <AboutSection />
                <NewsSliderSection />
                <CuriositySection />
                <AnimalsSection />
            </div>
        </>
    );
}

export default Home;