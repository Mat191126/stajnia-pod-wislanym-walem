import React from 'react';
import AboutSection from "./sections/AboutSection";
import CuriositySection from "./sections/CuriositySection";
import GallerySection from "./sections/GallerySection";
import InstructorsSection from './sections/InstructorsSection';
import NewsSliderSection from "./sections/NewsSliderSection";
import OwnerSection from './sections/OwnerSection';

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
                <OwnerSection />
                <InstructorsSection />
                <GallerySection />
            </div>
        </>
    );
}

export default Home;