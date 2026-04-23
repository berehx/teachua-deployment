import React from 'react';
import {Header} from "antd/es/layout/layout";
import HeaderRight from "./HeaderRight";
import NavMenu from "./NavMenu";

const HeaderComponent = () => {
    return (
        <Header className="header">
            <div className="left-side-menu">
                <div className="logo"/>
            </div>

            <NavMenu/>
            <HeaderRight/>
        </Header>
    );
};

export default HeaderComponent;