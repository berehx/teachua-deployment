import './css/AboutNews.css';
import React, {useEffect, useState} from "react";
import CategoryLogo from "../CategoryLogo";
import PrimitiveCard from "../PrimitiveCard";
import {getPageableCategory} from "../../service/CategoryService";
import {getPageableNews} from "../../service/NewsService";

const AboutChallenge = () => {
    const NEWS_SIZE = 3;

    const [news, setNews] = useState({
        content: []
    });

    useEffect(() => {
        getPageableNews(NEWS_SIZE).then(response => {
            setNews(response);
            console.log(response)
        });
    }, []);

    return (
        <div className="about-news">
            <h2 className="label">Новини</h2>
            <div className="news-cards">
                {news.content.map(currentNews =>
                    <PrimitiveCard
                        header={
                            <div className="title">
                                <img src={currentNews.urlTitleLogo}/>
                                <div className="date">{new Date(currentNews.date).toLocaleString('uk', {
                                    day: 'numeric',
                                    month: 'numeric',
                                    year: 'numeric'
                                })}</div>
                                <div className="name">{currentNews.name}</div>
                            </div>
                        }
                        description={currentNews.description}
                        link={""}
                        buttonText="Переглянути"/>)}
            </div>
        </div>
    );
};

export default AboutChallenge;