import React from 'react';

function News() {
    
    return (
        <>
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