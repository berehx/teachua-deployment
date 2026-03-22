import React from "react";
import './css/PageRating.css';
import PropTypes from "prop-types";
import {Rate} from "antd";

const PageRating = ({rating, count}) => {
    return (
        <div className="page-rating">
            <Rate allowHalf disabled value={rating}/>
            <span className="feedback">{count} відгуків</span>
        </div>
    )
};

PageRating.propTypes = {
    rating: PropTypes.symbol.isRequired
};

export default PageRating;