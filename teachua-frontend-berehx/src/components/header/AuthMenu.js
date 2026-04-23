import React from "react";
import {Avatar, Button, Dropdown, Menu} from "antd";
import CaretDownFilled from "@ant-design/icons/lib/icons/CaretDownFilled";
import UserOutlined from "@ant-design/icons/lib/icons/UserOutlined";
import '../registration/css/Registration.less'
import Registration from "../registration/Registration";


const AuthMenu = () => {
    const profileDropdown = (
        <Menu>

            <Menu.Item>Увійти</Menu.Item>
            <Menu.Item> <Registration/></Menu.Item>
            <Menu.Item> <a target="blank" href="/user"><Button> Сторінка користувача</Button> </a></Menu.Item>
            <Menu.Item danger>Вийти</Menu.Item>
        </Menu>
    );

    return (
        <Dropdown overlay={profileDropdown} className="user-profile" placement="bottomCenter" arrow>
            <div>
                <Avatar size="large" icon={<UserOutlined/>}/> <CaretDownFilled/>
            </div>
        </Dropdown>
    )
};

export default AuthMenu;