import React from 'react';
import AboutSection from "./sections/AboutSection";
import GoalsSection from "./sections/GoalsSection";
import AnimalsSection from "./sections/AnimalsSection";

function Home() {

    document.addEventListener('DOMContentLoaded', function(event) {
        document.querySelector('video').playbackRate = 0.5;
    });

    return (
        <>
            <div id="content">
                <AboutSection />
                <GoalsSection />
                <AnimalsSection />
            </div>
        </>
    );
}

export default Home;