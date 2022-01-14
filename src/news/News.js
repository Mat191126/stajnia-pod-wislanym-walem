import React, { useEffect } from 'react';

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
                            <span className="single-news-date">Data</span>
                            <h2 className="single-news-title">Tytuł</h2>
                            <p className="single-news-text">Tekst aktualności</p>
                        </div>
                        <div className="single-news-right-panel">
                            <img className="single-news-image" src="" alt="zdjęcie aktualności" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default News;