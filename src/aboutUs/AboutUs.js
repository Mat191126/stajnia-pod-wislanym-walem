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
                    <div className='link-to-section'><a href='#about-us-section-content'> O nas </a></div>
                    <div className='link-to-section'><a href='#our-instructors-section-content'> Nasi Instruktorzy </a></div>
                    <div className='link-to-section'><a href='#our-horses-section-content'> Konie </a></div>
                    <div className='link-to-section'><a href='#other-animals-section-content'> Inne Zwierzęta </a></div>
                </div>
                <AboutDescriptionSection />
                <OurInstructorsSection />
                <OurHorsesSection />
                <OtherAnimalsSection />
            </div>
        </>
    );
}

export default AboutUs;