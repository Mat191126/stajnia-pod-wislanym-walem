import React, { useEffect } from 'react';

function SingleNews(props) {
    
    useEffect(() => {
        const galleryContent = document.getElementById("scroll-to-element");
        galleryContent.scrollIntoView(true);
    });

    return (
        <>
            <p id="scroll-to-element"></p>
            <div id="content">
                <div id="single-news-page-content">
                    <div className="single-news-container">
                        <div className="regular-content">
                            <div className="single-news-page-left-panel">
                                <span className="single-news-page-date">{props.singleNews.date}</span>
                                <h2 className="single-news-page-title">{props.singleNews.header}</h2>
                                <p className="single-news-page-text">{props.singleNews.text}</p>
                            </div>
                            <div className="single-news-page-right-panel">
                                <img className="single-news-page-image" src={props.singleNews.image} alt="zdjęcie aktualności" />
                            </div>
                        </div>
                        <div className="additional-content">
                            <img className="single-news-page-addon-image" src={props.singleNews.addonImage} alt="zdjęcie załącznika" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SingleNews;