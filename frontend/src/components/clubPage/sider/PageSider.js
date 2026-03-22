import React from "react";
import './css/PageSider.css';
import PropTypes from 'prop-types';
import Sider from "antd/es/layout/Sider";
import EnvironmentFilled from "@ant-design/icons/lib/icons/EnvironmentFilled";
import {getSimilarClubsByCategoryName} from "../../../service/ClubService";
import SocialMedia from "./SocialMedia";
import SimilarClubs from "./SimilarClubs";
import {searchParameters} from "../../../context/SearchContext";
import {ROOT_URI} from "../../../config/ApplicationConfig";

class PageSider extends React.Component {
    state = {
        similarClubs: []
    };

    getData = () => {
        getSimilarClubsByCategoryName(this.props.club.id, this.props.club.categories[0].name, searchParameters.cityName).then(response => {
            this.setState({similarClubs: response});
        });
    };

    componentDidMount() {
        window.scrollTo(0, 0);
        this.getData();
    }

    componentDidUpdate(preProps) {
        if (preProps.club.id !== this.props.club.id) {
            this.getData();
        }
    }

    render() {
        return (
            <Sider className="page-sider" width={364}>
                <div className="address">
                    <EnvironmentFilled
                        className="address-icon"/>
                    <p className="text"> {this.props.club.address}</p>
                </div>
                <div className="map">
                    <img src={`${ROOT_URI}/static/map.png`} alt="Map"/>
                </div>
                <div className="age">
                    <span className="sider-label">Вік аудиторії: </span>
                    <span className="years">від {this.props.club.ageFrom} до {this.props.club.ageTo} років</span>
                </div>
                {this.props.club.center &&
                <div className="center">
                    <span className="sider-label">Центр розвитку: </span>
                    <span className="name">{this.props.club.center.name}</span>
                </div>}
                <SocialMedia/>
                <SimilarClubs similarClubs={this.state.similarClubs}/>
            </Sider>
        )
    }
}

PageSider.propTypes = {
    club: PropTypes.object.isRequired
};

export default PageSider;