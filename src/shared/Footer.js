import React from 'react';
import InstagramIcon from "../assets/images/icons/instagram-icon.png"
import FacebookIcon from "../assets/images/icons/facebook-icon.png"

function Footer() {


    return (
        <>
            <div id="footer">
                <div id="contact">
                    <h2 id="contact_header">Kontakt</h2>
                    <p>W razie jakichkolwiek pytań prosimy o telefon lub maila.
                        Postaramy się odpowiedzieć jak najszybciej na Wasze wiadomości!</p>
                    <address>
                        <p><a href="mailto:stajnia@podwislanymwalem.pl">stajnia@podwislanymwalem.pl</a></p>
                        <a href="tel:+48-665-246-359">665 246 359</a>
                        <p>ul.Wiślana 34, 32-051 Jaśkowice</p>
                    </address>
                </div>
                <div id="footer-social-media-icons">
                    <a href='https://www.instagram.com/stajniapodwislanym' target='_blank'><img id="instagram-icon" src={InstagramIcon} alt=""/></a>
                    <a href='https://www.facebook.com/podwislanymwalem' target='_blank'><img id="facebook-icon" src={FacebookIcon} alt=""/></a>
                </div>
            </div>
        </>
    );
}

export default Footer;