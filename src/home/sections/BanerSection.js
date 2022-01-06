import React from 'react';
import BannerImage from "../../assets/images/logo.png";

function BannerSection() {


    return (
        <>
            <div id="banner-section">
                <div id="banner">
                    <img className="banner-image" src={BannerImage} alt="Baner"/>
                </div>
            </div>
        </>
    );
}

export default BannerSection;