import React, { useEffect, useState } from 'react';
// Stash with other idea 904d325 Add link to Gallery page from Gallery Section

function SingleNews() {

    const [news] = useState(JSON.parse(localStorage.getItem("news")));
    
    useEffect(() => {
        const galleryContent = document.getElementById("scroll-to-element");
        galleryContent.scrollIntoView({ behavior: 'smooth' });
    });

    return (
        <>
            <p id="scroll-to-element"></p>
            <div id="content">
                <div id="single-news-page-content">
                    <div className="single-news-container">
                        <div className="single-news-regular-content">
                            <div className="single-news-page-left-panel">
                                <span className="single-news-page-date">{news.date}</span>
                                <h2 className="single-news-page-title">{news.title}</h2>
                                <p className="single-news-page-text">{news.text}</p>
                            </div>
                            <div className="single-news-page-right-panel">
                                <img className="single-news-page-image" src={news.image_url} alt="zdjęcie aktualności" />
                            </div>
                        </div>
                        <div className="single-news-additional-content">
                            <img className="single-news-page-addon-image" src={news.addon_image_url} alt="zdjęcie załącznika" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SingleNews;