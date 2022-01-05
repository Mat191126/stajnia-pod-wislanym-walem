import React from 'react';
import MainMenu from "./MainMenu";
import headerVideo from "../assets/video/header_video.mp4";
import headerVideoMobile from "../assets/video/header_video_mobile_cutted.mp4";
import InstagramIcon from "../assets/images/icons/instagram-icon.png";
import FacebookIcon from "../assets/images/icons/facebook-icon.png";

function Header() {

    document.addEventListener('DOMContentLoaded', function(event) {
        document.querySelector('video').playbackRate = 0.5;
    });

    return (
        <>
            <header className="header_content">
                <div id="header_and_navbar">
                    <div id="top-bar"></div>
                    <div id="top-bar-social-media-icons">
                            <a href='https://www.instagram.com/stajniapodwislanym' target='_blank' rel="noopener noreferrer">
                                <img id="top-bar-instagram-icon" src={InstagramIcon} alt="instagram icon"/></a>
                            <a href='https://www.facebook.com/podwislanymwalem' target='_blank' rel="noopener noreferrer">
                                <img id="top-bar-facebook-icon" src={FacebookIcon} alt="facebook icon"/></a>
                        </div>
                    <div className="main-video-wrapper">
                        <video id="normal_size_video" autoPlay loop muted playsInline src={headerVideo}/>
                        <video id="mobile_size_video" autoPlay loop muted playsInline src={headerVideoMobile}/>
                    </div>
                    <MainMenu />
                </div>
            </header>
        </>
    );
}

export default Header;