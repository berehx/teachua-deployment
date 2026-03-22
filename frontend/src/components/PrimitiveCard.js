import React from "react";
import {Link} from "react-router-dom";
import ArrowRightOutlined from "@ant-design/icons/lib/icons/ArrowRightOutlined";
import './css/PrimitiveCard.css';
import PropTypes from "prop-types";

const PrimitiveCard = ({header, description, link, buttonText}) => {
    return (
        <div className="primitive-card">
            <div className="content">
                {header}
                <div className="description">{description}</div>
                <Link to={link}><div className="details">{buttonText}<ArrowRightOutlined className="arrow"/></div></Link>
            </div>
        </div>)
};
/*PrimitiveCard.propTypes = {
    content: PropTypes.object.isRequired
};*/

export default PrimitiveCard;