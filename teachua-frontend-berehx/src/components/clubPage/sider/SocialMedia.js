import TwitterOutlined from "@ant-design/icons/lib/icons/TwitterOutlined";
import FacebookOutlined from "@ant-design/icons/lib/icons/FacebookOutlined";
import GoogleOutlined from "@ant-design/icons/lib/icons/GoogleOutlined";
import InstagramOutlined from "@ant-design/icons/lib/icons/InstagramOutlined";
import './css/SocialMedia.css';
import React from "react";

const SocialMedia = () => {
    return (<div className="social-media">
            <p className="label">Ми у соц. мережах</p>
            <div className="links">
                <a target="_blank" href="#"><TwitterOutlined className="icon"/></a>
                <a target="_blank" href="#"><FacebookOutlined className="icon"/></a>
                <a target="_blank" href="#"><GoogleOutlined className="icon"/></a>
                <a target="_blank" href="#"><InstagramOutlined className="icon"/></a>
            </div>
        </div>
    )
};

export default SocialMedia;