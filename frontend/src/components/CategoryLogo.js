import {Card, Tag} from "antd";
import React from "react";
import PropTypes from "prop-types";
import ClubList from "./clubList/ClubList";

const CategoryLogo = ({category}) => {
    return (
        <div className="icon-box" style={{backgroundColor: category.backgroundColor}}>
            <img className="icon" src={category.urlLogo} alt="Category logo"/>
        </div>
    )
};

CategoryLogo.propTypes = {
    category: PropTypes.object.isRequired
};

export default CategoryLogo;
