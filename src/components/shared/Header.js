import React from 'react';
import MainMenu from "./MainMenu";
import headerVideoMobile from "../../assets/video/header_video_mobile_cutted.mp4";
// import headerVideoImage from "../../assets/video/main_video_image.png";
import headerVideoMobileImage from "../../assets/video/mobile_video_image.png";
import YouTubeVideo from './YouTubeVideo';
import InstagramIcon from "../../assets/images/icons/insta_icon_top.png";
import FacebookIcon from "../../assets/images/icons/fb_icon_top.png";
import YouTubeIcon from "../../assets/images/icons/yt_icon_top.png";
import {Link} from "react-router-dom";
import logo from "../../assets/images/logo.png";

function Header() {

    const headerVideoEmbed = "esEasiIjvdk";
    let intervalId;

    document.addEventListener('DOMContentLoaded', function() {
        const videoWrapper = document.getElementById("main-video-wrapper");
        addVideos(videoWrapper);

        intervalId = window.setInterval(function(){
            play_pause();
          }, 2500);
    });

    function addVideos(videoWrapper) {
        const mobileSizeVideo = document.createElement("video");
        mobileSizeVideo.id = "mobile_size_video";
        mobileSizeVideo.src = headerVideoMobile;
        mobileSizeVideo.autoplay = true;
        mobileSizeVideo.loop = true;
        mobileSizeVideo.muted = true;
        mobileSizeVideo.playsInline = true;

        videoWrapper.appendChild(mobileSizeVideo);
        document.querySelector('video').playbackRate = 0.5;
    }

    function play_pause() {
        const mobileSizeVideo = document.getElementById("mobile_size_video");
        const normalSizeVideo = document.getElementById("normal_size_video");
        const mobileSizeVideoImage = document.getElementById("mobile_size_video_image");
        changeStyling(mobileSizeVideo, mobileSizeVideoImage, normalSizeVideo);
    }

    function changeStyling(mobileSizeVideo, mobileSizeVideoImage, normalSizeVideo) {
        if (mobileSizeVideo.readyState === 4) {
            clearInterval(intervalId);
            if (window.innerWidth <= 1024) {
                mobileSizeVideo.style.display = 'block';
                mobileSizeVideoImage.style.display = 'none';
            } else {
                normalSizeVideo.style.display = 'block';
            }
        } else {
            if (window.innerWidth <= 1024) {
                mobileSizeVideo.style.display = 'none';
                mobileSizeVideoImage.style.display = 'block';
            } else {
                normalSizeVideo.style.display = 'none';
            }
        }
    }

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
                    <div id="main-video-wrapper">
                        <YouTubeVideo embedId={headerVideoEmbed} wrapperId="normal_size_video" frameId="normal_size_video_frame"/>
                        <img id='mobile_size_video_image' src={headerVideoMobileImage} alt=""/>
                    </div>
                    <MainMenu />
                </div>
            </header>
        </>
    );
}

export default Header;