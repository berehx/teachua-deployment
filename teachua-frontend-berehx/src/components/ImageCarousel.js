import {Image} from "antd";
import React, {useState, useEffect} from "react";
import './css/ImageCarousel.css';
import LeftOutlined from "@ant-design/icons/lib/icons/LeftOutlined";
import RightOutlined from "@ant-design/icons/lib/icons/RightOutlined";
import PropTypes from "prop-types";

const ImageCarousel = ({urls}) => {
    const [carouselWidth, setCarouselWidth] = useState(0);
    let carouselPosition = 0;

    useEffect(() => {
        setCarouselWidth(carousel().scrollWidth);
    }, []);

    const carousel = () => {
        let element = document.getElementById("carousel");
        return {
            scrollWidth: element.scrollWidth,
            clientWidth: element.clientWidth,
            step: (carouselWidth - element.clientWidth) / urls.length
        }
    };

    const nextImage = () => {
        carouselPosition = carouselPosition >= (carouselWidth - carousel().clientWidth) ? 0 : (carouselPosition + carousel().step);
        moveSlider();
    };

    const prevImage = () => {
        carouselPosition = carouselPosition <= 0 ? carouselWidth - carousel().clientWidth : (carouselPosition - carousel().step);
        moveSlider();
    };

    const moveSlider = () => {
        for (const img of document.getElementsByClassName("ant-image")) {
            img.style.transform = `translateX(${-carouselPosition}px)`;
        }
    };

    return (
        <div id="carousel-box">
            <div className="carousel" id="carousel">
                <LeftOutlined className="arrow previous" onClick={prevImage}/>
                <Image.PreviewGroup>
                    {
                        urls.map(url => <Image className="carousel-cell" src={url}/>)
                    }
                </Image.PreviewGroup>
                <RightOutlined className="arrow next" onClick={nextImage}/>
            </div>
        </div>
    )
};

ImageCarousel.propTypes = {
    urls: PropTypes.array.isRequired
};

export default ImageCarousel;