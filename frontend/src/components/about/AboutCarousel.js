import {Button, Carousel} from "antd";
import React, {useRef} from "react";
import './css/AboutCarousel.css';
import ArrowLeftOutlined from "@ant-design/icons/lib/icons/ArrowLeftOutlined";
import ArrowRightOutlined from "@ant-design/icons/lib/icons/ArrowRightOutlined";

const AboutCarousel = (items) => {
    const carousel = useRef(null);

    return (
        <div className="about-carousel-block">
            <ArrowLeftOutlined className="arrow" onClick={() => carousel.current.prev()}/>
            <Carousel ref={node => carousel.current = node} className="about-carousel" autoplay>
                {items.items.map((item) =>
                    <div>
                        <div className="carousel-item" style={{
                            background: `url(${item.imageURL}) no-repeat 50% 50% / cover`
                        }}>
                            {item.body}
                        </div>
                    </div>)}
            </Carousel>
            <ArrowRightOutlined className="arrow" onClick={() => carousel.current.next()}/>
        </div>
    );
};

export default AboutCarousel;