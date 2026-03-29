import {Button} from "antd";
import EnvironmentFilled from "@ant-design/icons/lib/icons/EnvironmentFilled";
import React from "react";
import './css/MarkItem.css'
import {Link} from "react-router-dom";

const MarkItem = ({mapClub}) => {
    return (
        <div className="markItem">
            <div className="title">
                {mapClub.name}
            </div>
            <p className="description">{mapClub.description}</p>
            <div className="content">
                <div className="address">
                    <EnvironmentFilled className="address-icon"/>
                    <span className="text">{mapClub.address}</span>
                </div>
            </div>
            <Button className="bt">
                <Link to={`/club/${mapClub.id}`}>Детальніше</Link>
            </Button>
        </div>
    )
};

export default MarkItem;