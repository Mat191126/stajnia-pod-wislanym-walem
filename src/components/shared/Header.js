import React from 'react';
import MainMenu from "./MainMenu";
import headerImage from "../../assets/images/main_header_image.png";
import headerMobileImage from "../../assets/images/mobile_header_image.png";
import InstagramIcon from "../../assets/images/icons/insta_icon_top.png";
import FacebookIcon from "../../assets/images/icons/fb_icon_top.png";
import YouTubeIcon from "../../assets/images/icons/yt_icon_top.png";
import {Link} from "react-router-dom";
import logo from "../../assets/images/logo.png";

function Header() {

    return (
        <>
            <header className="header_content">
                <div id="header_and_navbar">
                    <div id="top-bar"></div>
                    <div id="top-bar-logo-container">
                        <Link id="top-bar-logo" to='/'>
                            <img id='top-bar-logo-image' src={logo} alt=""/>
                        </Link>
                    </div>
                    <div id="top-bar-social-media-icons">
                            <a href='https://www.instagram.com/stajniapodwislanym' target='_blank' rel="noopener noreferrer">
                                <img id="top-bar-instagram-icon" src={InstagramIcon} alt="instagram icon"/></a>
                            <a href='https://www.facebook.com/podwislanymwalem' target='_blank' rel="noopener noreferrer">
                                <img id="top-bar-facebook-icon" src={FacebookIcon} alt="facebook icon"/></a>
                            <a href='https://www.youtube.com/channel/UCF3tX7kxJKA0pI-OlewYfRg' target='_blank' rel="noopener noreferrer">
                                <img id="top-bar-youtube-icon" src={YouTubeIcon} alt="youtube icon"/></a>
                        </div>
                    <div className="main-header-wrapper">
                        <img id='normal_size_image' src={headerImage} alt=""/>
                        <img id='mobile_size_image' src={headerMobileImage} alt=""/>
                    </div>
                    <MainMenu />
                </div>
            </header>
        </>
    );
}

export default Header;