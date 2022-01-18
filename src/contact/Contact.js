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

                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;