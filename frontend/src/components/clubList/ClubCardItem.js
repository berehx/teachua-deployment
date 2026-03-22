import {Button, Card, Rate, Tag} from "antd";
import EnvironmentFilled from "@ant-design/icons/lib/icons/EnvironmentFilled";
import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import Tags from "../Tags";
import CategoryLogo from "../CategoryLogo";
import {ROOT_URI} from "../../config/ApplicationConfig";

const ClubCardItem = ({club}) => {
    return (
        <Card className="card">
            <div className="title">
                <CategoryLogo category={club.categories[0]}/>
                <div className="name">{club.name}</div>
            </div>
            <Tags categories={club.categories}/>
            {club.center !== null ?
                <div className="with-center">
                    <div className="center">
                        <img className="center-logo" src={club.center.urlLogo} alt="Center logo"/>
                        <div className="center-description">
                            <span className="center-label">Центр розвитку</span>
                            <span className="center-name">{club.center.name}</span>
                        </div>
                    </div>
                    <p className="description">{club.description}</p>
                </div> :
                <p className="description">{club.description}</p>}
            <Rate className="rating" disabled value={club.rating} />
            <div className="address">
                <EnvironmentFilled
                    className="address-icon"/>
                <span className="text"> {club.address}</span>
            </div>
            <Button className="outlined-button details-button">
                <Link to={`/club/${club.id}`}>Детальніше</Link>
            </Button>
        </Card>
    )
};
ClubCardItem.propTypes = {
    club: PropTypes.object.isRequired
};

export default ClubCardItem;