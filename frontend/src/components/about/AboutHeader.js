import React from "react";
import Search from "../Search";

const AboutHeader = () => {
    return (
        <div className="lower-header-box">
            <div className="city-name-box">
                <h2 className="city-name">Ініціатива “Навчай українською”</h2>
            </div>
            <Search />
        </div>
    );
};

export default AboutHeader;