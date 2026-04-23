import React, {useEffect, useState} from "react";
import {Select} from "antd";
import {getAllCities} from "../../service/CityService";
import {mapSearchParameters} from "../../context/SearchContext";
import {getClubsByParameters} from "../../service/ClubService";
import './css/Cities.css';


const Cities = ({setMapClubs, setZoom, setCenter}) => {
    const {Option} = Select;
    const [cities, setCities] = useState([]);

    useEffect(() => {
        getAllCities().then(response => setCities(response));
    }, []);

    const onCityChange = (value) => {
        mapSearchParameters.cityName = value;
        getClubsByParameters(mapSearchParameters).then(response => setMapClubs(response));
        setZoom(10);
        cities.filter(city => city.name === value)
            .map(city => setCenter({
                lat: city.latitude,
                lng: city.longitude
            }));
    };

    return (
        <Select
            className="selectCity"
            onChange={onCityChange}
            onClear={() => {
                console.log("I am clear))")
            }}
            showSearch
            placeholder={mapSearchParameters.cityName}
            style={{borderRadius: '30px'}}
        >
            {cities.map(city => (<Option value={city.name}>{city.name}</Option>))}
        </Select>
    )
}

export default Cities;