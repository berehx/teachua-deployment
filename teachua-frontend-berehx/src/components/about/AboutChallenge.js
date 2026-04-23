import './css/AboutChallenge.css';
import React from "react";
import {Button} from "antd";

const AboutChallenge = ({label, text, imageUrl, buttonLabel}) => {
    return (
        <div className="about-challenge">
            <div className="challenge-description">
                <h2 className="label">{label}</h2>
                <span className="text">{text}</span>
                <Button className="flooded-button materials-button">{buttonLabel}</Button>
            </div>
            <div className="image">
            <img src={imageUrl}/>
            </div>
        </div>
    );
};

export default AboutChallenge;