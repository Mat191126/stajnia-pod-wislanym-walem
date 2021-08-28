import React from 'react';
import MainMenu from "./MainMenu";
import headerVideo from "../assets/video/header_video.mp4";

function Header() {

    document.addEventListener('DOMContentLoaded', function(event) {
        document.querySelector('video').playbackRate = 0.5;
    });

    return (
        <>
            <header className="header_content">
                <div id="header_and_navbar">
                    <div id="top-bar"></div>
                    <div className="main-video-wrapper">
                        <video autoPlay loop muted playsInline src={headerVideo}/>
                    </div>
                    <MainMenu />
                </div>
            </header>
        </>
    );
}

export default Header;