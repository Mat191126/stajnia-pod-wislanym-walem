import React, { useEffect } from 'react';

function Contact() {

    useEffect(() => {
        const galleryContent = document.getElementById("scroll-to-element");
        galleryContent.scrollIntoView(true);
    });

    return (
        <>
            <p id="scroll-to-element"></p>
            <div id="content">
                <div id="contact-content">
                <h2 id="contact_header">Kontakt</h2>
                    <div id="contact-part">
                        <div id="address-content">
                            <address>
                            <h3 id="company-header">Stajnia pod wiślanym wałem</h3>
                            <p className="address-line">ul.Wiślana 34</p>
                            <p className="address-line">32-051 Jaśkowice</p>
                            </address>
                        </div>
                        <div id="email-content">
                            <p><a href="mailto:stajnia@podwislanymwalem.pl">stajnia@podwislanymwalem.pl</a></p>
                        </div>
                        <div id="phone-content">
                            <p><a href="tel:+48-665-246-359">665 246 359</a></p>
                        </div>
                    </div>
                    <div id="map-part">
                        <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6261.616360813898!2d19.677688436099636!3d49.9714831525975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471660228cb9ad39%3A0x2db209c47be923f8!2sStajnia%20pod%20Wi%C5%9Blanym%20Wa%C5%82em!5e1!3m2!1sen!2spl!4v1642525891942!5m2!1sen!2spl" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;