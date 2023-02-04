import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function NewsCard(props) {

    return (
        <>
            <Link to={`/single-news/${props.singleNews.id}`}>
                <span className="news-navigation-link">Zobacz więcej szczegółów</span>
            </Link>
        </>
    );
}

export default NewsCard;