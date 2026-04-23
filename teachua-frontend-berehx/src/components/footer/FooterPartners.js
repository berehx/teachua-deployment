import React from 'react';
import {ROOT_URI} from "../../config/ApplicationConfig";

const FooterPartners = () => {
    return (
        <div className="footer-partners">
            <div className="article">
                Наші партнери
            </div>
            <div className="sponsors">
                <img src={`${ROOT_URI}/static/images/footer/sponsors/logo1.png`}  className="logo" alt="Logo"/>
                <img src={`${ROOT_URI}/static/images/footer/sponsors/logo2.png`}  className="logo" alt="Logo"/>
                <img src={`${ROOT_URI}/static/images/footer/sponsors/logo3.png`}  className="logo" alt="Logo"/>
                <img src={`${ROOT_URI}/static/images/footer/sponsors/logo4.png`}  className="logo" alt="Logo"/>
                <img src={`${ROOT_URI}/static/images/footer/sponsors/logo5.png`}  className="logo" alt="Logo"/>
            </div>

        </div>
    );
};

export default FooterPartners