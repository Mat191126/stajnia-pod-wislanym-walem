import React, { useEffect } from 'react';
import AboutDescriptionSection from './sections/AboutDescriptionSection';
import OtherAnimalsSection from './sections/OtherAnimalsSection';
import OurHorsesSection from './sections/OurHorsesSection';
import OurInstructorsSection from './sections/OurInstructorsSection';


function AboutUs() {

    useEffect(() => {
        const galleryContent = document.getElementById("scroll-to-element");
        galleryContent.scrollIntoView(true);
    });
    
    return (
        <>
            <p id="scroll-to-element"></p>
            <div id="content">
                <div id="section-menu-buttons">
                    <a id='about-us-button' className='link-to-section' href='#scroll-to-about-description-element'> O nas </a>
                    <a id='instructors-button' className='link-to-section' href='#scroll-to-instructors-element'> Nasi Instruktorzy </a>
                    <a id='horses-button' className='link-to-section' href='#scroll-to-horses-element'> Konie </a>
                    <a id='animals-button' className='link-to-section' href='#scroll-to-animals-element'> Inne Zwierzęta </a>
                </div>
                <p id="scroll-to-about-description-element"></p>
                <AboutDescriptionSection />
                <p id="scroll-to-instructors-element"></p>
                <OurInstructorsSection />
                <p id="scroll-to-horses-element"></p>
                <OurHorsesSection />
                <p id="scroll-to-animals-element"></p>
                <OtherAnimalsSection />
            </div>
        </>
    );
}

export default AboutUs;