import React from "react";
import {searchParameters} from "../../../context/SearchContext";
import PrimitiveCard from "../../PrimitiveCard";
import './css/SimilarClubs.css';
import PropTypes from "prop-types";
import {ROOT_URI} from "../../../config/ApplicationConfig";

const SimilarClubs = ({similarClubs}) => {
    return (
        <div className="similar-clubs">
            <p className="label">Схожі гуртки у місті {searchParameters.cityName}</p>
            {similarClubs.map(club => <PrimitiveCard key={club.id}
                                                     header={<div className="name">{club.name}</div>}
                                                     description={club.description}
                                                     link={`${ROOT_URI}/club/${club.id}`}
                                                     buttonText="Детальніше"/>)}
        </div>)
};
SimilarClubs.propTypes = {
    similarClubs: PropTypes.array.isRequired
};

export default SimilarClubs;