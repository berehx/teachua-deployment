import React, {useRef} from "react";
import PropTypes from 'prop-types';
import {Content} from "antd/es/layout/layout";
import './css/PageContent.css';
import {Button} from "antd";
import ImageCarousel from "../../ImageCarousel";
import PageRating from "./PageRating";

const PageContent = ({club, feedbackCount}) => {
    const images = [
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
        "https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/advice/maps-satellite-images/satellite-image-of-globe.jpg",
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
        "https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/advice/maps-satellite-images/satellite-image-of-globe.jpg",
        "https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/advice/maps-satellite-images/satellite-image-of-globe.jpg"
    ];

    return (
        <Content className="page-content">
            <PageRating rating={club.rating} count={feedbackCount}/>
            <ImageCarousel className="carousel" urls={images}/>
            <div className="upper">
                <div className="title">
                    {club.name}
                </div>
                <div className="description">
                    {club.description}
                </div>
            </div>
            <div className="lower">
                <div className="title">
                    {club.name}
                </div>
                <div className="description">
                    {club.description}
                </div>
            </div>
            <div className="full-width button-box">
                <Button className="flooded-button apply-button">Записатись на гурток</Button>
            </div>
        </Content>
    )
};

PageContent.propTypes = {
  club: PropTypes.object.isRequired
};


export default PageContent;