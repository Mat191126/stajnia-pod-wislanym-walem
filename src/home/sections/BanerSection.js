import React from 'react';
import BannerImage1 from "../../assets/images/banners/example_banner_1.png";
import BannerImage2 from "../../assets/images/banners/example_banner_2.png";
import BannerImage3 from "../../assets/images/banners/example_banner_3.png";
import BannerImage4 from "../../assets/images/banners/example_banner_4.png";

function BannerSection() {


    return (
        <>
            <div id="banner-section">
                <div id="banner">
                    <img className="banner-image" src={BannerImage1} alt="Baner"/>
                    <img className="banner-image" src={BannerImage2} alt="Baner"/>
                    <img className="banner-image" src={BannerImage3} alt="Baner"/>
                    <img className="banner-image" src={BannerImage4} alt="Baner"/>
                </div>
            </div>
        </>
    );
}

export default BannerSection;