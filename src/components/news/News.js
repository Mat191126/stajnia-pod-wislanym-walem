import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import sliderNews from "../../assets/data/news";


function News() {

    useEffect(() => {
        const newsContent = document.getElementById("scroll-to-element");
        newsContent.scrollIntoView({ behavior: 'smooth' });
    });

    function saveNewsToLocalStorage(singleNews) {
        console.log(singleNews);
        localStorage.setItem("news", JSON.stringify(singleNews));
    };

    let content = null;
    if (sliderNews) {
        content = sliderNews.map((singleNews) => (
            <div>
                <div key={singleNews.id} className="single-news">
                    <div className="single-news-content">
                        <div className="single-news-left-panel">
                            <span className="single-news-date">{singleNews.date}</span>
                            <h2 className="single-news-title">{singleNews.title}</h2>
                            <p className="single-news-text">{singleNews.text}</p>
                        </div>
                        <div className="single-news-right-panel">
                            <img className="single-news-image" src={singleNews.image_url} alt="zdjęcie aktualności" />
                        </div>
                    </div>
                    <div className="link-to-single-news">
                        <Link to={`/single-news/${singleNews.id}`}
                            onClick={() => saveNewsToLocalStorage(singleNews)}>
                            <span className="news-navigation-link">Zobacz więcej szczegółów</span>
                        </Link>
                    </div>
                </div>
            </div>
        ));
    }

    return (
        <>
            <p id="scroll-to-element"></p>
            <div id="content">
                <div id="news-page-content">
                    {content}
                </div>
            </div>
        </>
    );
}

export default News;