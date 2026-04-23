import React from "react";
import {Dropdown, Menu} from "antd";
import EnvironmentFilled from "@ant-design/icons/lib/icons/EnvironmentFilled";
import {mapSearchParameters, searchParameters} from "../../context/SearchContext";
import CaretDownFilled from "@ant-design/icons/lib/icons/CaretDownFilled";
import {getAllCities} from "../../service/CityService";
import {getClubsByParameters} from "../../service/ClubService";

class Cities extends React.Component {
    state = {
        cities: []
    };

    getData = () => {
        getAllCities().then(response => this.setState({cities: response}));
    };

    componentDidMount() {
        this.getData();
    }

    onCityChange = (value) => {
        searchParameters.cityName = value.key;
        mapSearchParameters.cityName=value.key;
        getClubsByParameters(searchParameters).then(response => this.props.setClubs(response));
    };

    render() {
        const cityList = (
            <Menu onClick={this.onCityChange}>
                {this.state.cities.map(city => (<Menu.Item key={city.name}>{city.name}</Menu.Item>))}
            </Menu>
        );

        return (
            <Dropdown overlay={cityList} className="city" placement="bottomCenter" arrow>
                <div>
                    <EnvironmentFilled
                        className="icon"/> {searchParameters.cityName}
                    <CaretDownFilled/>
                </div>
            </Dropdown>
        )
    }
}

export default Cities;

