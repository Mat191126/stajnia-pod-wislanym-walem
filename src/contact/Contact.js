import React, { useEffect } from 'react';
import InstagramIcon from '../assets/images/icons/inst_small.png';
import FacebookIcon from '../assets/images/icons/fb_small.png';
import YouTubeIcon from '../assets/images/icons/yt_small.png';


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
                    <h2 id="contact-page-header">Kontakt</h2>
                    <div id="contact-part">
                        <div id="address-content">
                            <address>
                            <h3 id="company-header">Stajnia pod wiślanym wałem</h3>
                            <p className="address-line">ul.Wiślana 34</p>
                            <p className="address-line">32-051 Jaśkowice</p>
                            </address>
                        </div>
                        <div id="email-phone-content">
                            <h3 id="email-and-phone-header">Dane kontaktowe</h3>
                            <p>E-mail: <a href="mailto:stajnia@podwislanymwalem.pl">stajnia@podwislanymwalem.pl</a></p>
                            <p>Tel: <a href="tel:+48-665-246-359">665 246 359</a></p>
                        </div>
                        <div id="address-social-media-icons">
                            <h3 id="address-social-media-header">Media Społecznościowe</h3>
                            <div id="address-social-media-icons-container">
                                <a href='https://www.instagram.com/stajniapodwislanym' target='_blank' rel="noopener noreferrer">
                                    <img id="contact-instagram-icon" src={InstagramIcon} alt="instagram icon"/></a>
                                <a href='https://www.facebook.com/podwislanymwalem' target='_blank' rel="noopener noreferrer">
                                    <img id="contact-facebook-icon" src={FacebookIcon} alt="facebook icon"/></a>
                                <a href='https://www.youtube.com/channel/UCF3tX7kxJKA0pI-OlewYfRg' target='_blank' rel="noopener noreferrer">
                                    <img id="contact-youtube-icon" src={YouTubeIcon} alt="youtube icon"/></a>
                            </div>
                        </div>
                    </div>
                    <div id="map-part">
                        <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6261.616360813898!2d19.677688436099636!3d49.9714831525975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471660228cb9ad39%3A0x2db209c47be923f8!2sStajnia%20pod%20Wi%C5%9Blanym%20Wa%C5%82em!5e1!3m2!1sen!2spl!4v1642525891942!5m2!1sen!2spl" allowfullscreen="" loading="lazy" title="google map"></iframe>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;