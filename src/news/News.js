import React, { useEffect } from 'react';
import ExampleNewsImage from "../assets/images/sliderImages/image2.jpg";

function News() {
    
    useEffect(() => {
        const galleryContent = document.getElementById("scroll-to-element");
        galleryContent.scrollIntoView(true);
    });

    return (
        <>
            <p id="scroll-to-element"></p>
            <div id="content">
                <div id="news-page-content">
                    <div className="single-news">
                        <div className="single-news-left-panel">
                            <span className="single-news-date">01.12.2021</span>
                            <h2 className="single-news-title">Zmiana cennika</h2>
                            <p className="single-news-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <div className="single-news-right-panel">
                            <img className="single-news-image" src={ExampleNewsImage} alt="zdjęcie aktualności" />
                        </div>
                    </div>
                    <div className="single-news">
                        <div className="single-news-left-panel">
                            <span className="single-news-date">30.12.2021</span>
                            <h2 className="single-news-title">Szcęśliwego Nowego Roku</h2>
                            <p className="single-news-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div className="single-news-right-panel">
                            <img className="single-news-image" src={ExampleNewsImage} alt="zdjęcie aktualności" />
                        </div>
                    </div>
                    <div className="single-news">
                        <div className="single-news-left-panel">
                            <span className="single-news-date">21.11.2021</span>
                            <h2 className="single-news-title">Przypominamy o wolnych miejscach</h2>
                            <p className="single-news-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div className="single-news-right-panel">
                            <img className="single-news-image" src={ExampleNewsImage} alt="zdjęcie aktualności" />
                        </div>
                    </div>
                    <div className="single-news">
                        <div className="single-news-left-panel">
                            <span className="single-news-date">25.10.2021</span>
                            <h2 className="single-news-title">Impreza Haloweenowa już we czwartek!</h2>
                            <p className="single-news-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div className="single-news-right-panel">
                            <img className="single-news-image" src={ExampleNewsImage} alt="zdjęcie aktualności" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default News;