import {searchParameters} from "../../context/SearchContext";
import Search from "../Search";
import React, {useState} from "react";
import {Button, Layout} from "antd";
import MapComponent from "../map/MapComponent";
import ControlOutlined from "@ant-design/icons/lib/icons/ControlOutlined";
import EnvironmentFilled from "@ant-design/icons/lib/icons/EnvironmentFilled";

const ClubListHeader = () => {
    const [mapVisible, setMapVisible] = useState(false);

    return (
        <div className="lower-header-box">
            <div className="city-name-box">
                <div className="city-name-box-small-screen">
                    <h2 className="city-name">{"Гуртки у місті " + searchParameters.cityName}</h2>
                    <EnvironmentFilled className="icon"/>
                </div>
                <Button className="flooded-button show-map-button"
                        onClick={() => setMapVisible(true)}>Показати на карті</Button>
            </div>
            <Search/>
            <MapComponent visible={mapVisible} setVisible={setMapVisible}/>
        </div>
    );
};

export default ClubListHeader;