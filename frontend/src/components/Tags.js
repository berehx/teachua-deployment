import {Tag} from "antd";
import React from "react";
import PropTypes from "prop-types";

const Tags = ({categories}) => {
    return (
        <div className="tags">
            {categories.map(category =>
                <Tag className="tag" key={category.id} style={{
                    backgroundColor: category.tagBackgroundColor,
                    color: category.tagTextColor,
                }}>
                    <div className="icon"
                         style={{
                             backgroundColor: category.tagTextColor,
                             webkitMask: `url(${category.urlLogo}) no-repeat center / contain`
                         }}/>
                    <span className="name">{category.name}</span>
                </Tag>)
            }
        </div>
    )
};

Tags.propTypes = {
    categories: PropTypes.array.isRequired
};

export default Tags;
