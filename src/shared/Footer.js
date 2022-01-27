import React from 'react';
import InstagramIcon from '../assets/images/icons/inst_small.png';
import FacebookIcon from '../assets/images/icons/fb_small.png';
import YouTubeIcon from '../assets/images/icons/yt_small.png';

function Footer() {


    return (
        <>
            <div id="footer">
                <div id="footer-contact">
                    <div id="footer-contact-part">
                        <div id="footer-address-content">
                            <h2 id="footer-contact-page-header">Kontakt</h2>
                            <address>
                            <h3 id="footer-company-header">Stajnia pod wiślanym wałem</h3>
                            <p className="footer-address-line">ul.Wiślana 34</p>
                            <p className="footer-address-line">32-051 Jaśkowice</p>
                            </address>
                        </div>
                        <div id="footer-address-social-media-icons">
                            <h3 id="footer-address-social-media-header">Media Społecznościowe</h3>
                            <div id="footer-address-social-media-icons-container">
                                <a href='https://www.instagram.com/stajniapodwislanym' target='_blank' rel="noopener noreferrer">
                                    <img id="footer-contact-instagram-icon" src={InstagramIcon} alt="instagram icon"/></a>
                                <a href='https://www.facebook.com/podwislanymwalem' target='_blank' rel="noopener noreferrer">
                                    <img id="footer-contact-facebook-icon" src={FacebookIcon} alt="facebook icon"/></a>
                                <a href='https://www.youtube.com/channel/UCF3tX7kxJKA0pI-OlewYfRg' target='_blank' rel="noopener noreferrer">
                                    <img id="footer-contact-youtube-icon" src={YouTubeIcon} alt="youtube icon"/></a>
                            </div>
                        </div>
                        <div id="footer-email-phone-content">
                            <h3 id="footer-email-and-phone-header">Dane kontaktowe</h3>
                            <p>E-mail: <a href="mailto:stajnia@podwislanymwalem.pl">stajnia@podwislanymwalem.pl</a></p>
                            <p>Tel: <a href="tel:+48-665-246-359">665 246 359</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;