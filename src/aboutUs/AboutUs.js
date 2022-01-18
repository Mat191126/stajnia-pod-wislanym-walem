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
                    <div className='link-to-section'><a href='#scroll-to-about-description-element'> O nas </a><div className="rounded-corners"/></div>
                    <div className='link-to-section'><a href='#scroll-to-instructors-element'> Nasi Instruktorzy </a><div className="rounded-corners"/></div>
                    <div className='link-to-section'><a href='#scroll-to-horses-element'> Konie </a><div className="rounded-corners"/></div>
                    <div className='link-to-section'><a href='#scroll-to-animals-element'> Inne Zwierzęta </a><div className="rounded-corners"/></div>
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