import EnvironmentFilled from "@ant-design/icons/lib/icons/EnvironmentFilled";
import React from "react";
import './css/ClubItem.css'

const ClubItem = ({mapClub, setZoom, setSelected,setCenter}) => {
    return (
        <div onClick={() => {
            setSelected(mapClub);
            setZoom(15);
            setCenter({
                lat: mapClub.latitude,
                lng:mapClub.longitude
            })
        }} className="club-item">
            <div className="title">
                <div className="icon-box" style={{backgroundColor: mapClub.categories[0].backgroundColor}}>
                    <img className="icon" src={mapClub.categories[0].urlLogo} alt="Category logo"/>
                </div>
                <div className="name">
                    {mapClub.name}
                </div>
            </div>
            <div className="address">
                <EnvironmentFilled className="address-icon"/>
                <span className="text"> {mapClub.address}</span>
            </div>
        </div>
    )
};

export default ClubItem;