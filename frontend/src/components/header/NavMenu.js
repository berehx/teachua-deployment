import {Menu} from "antd";
import {Link} from "react-router-dom";
import React, {useState} from "react";
import ApartmentOutlined from "@ant-design/icons/lib/icons/ApartmentOutlined";
import CrownOutlined from "@ant-design/icons/lib/icons/CrownOutlined";
import ContainerOutlined from "@ant-design/icons/lib/icons/ContainerOutlined";
import FolderOpenOutlined from "@ant-design/icons/lib/icons/FolderOpenOutlined";
import FlagOutlined from "@ant-design/icons/lib/icons/FlagOutlined";
import MenuOutlined from "@ant-design/icons/lib/icons/MenuOutlined";
import {ROOT_URI} from "../../config/ApplicationConfig";

const NavMenu = () => {
    const data = window.location.pathname === '/' ? 'clubs' : localStorage.getItem("head-component-page");
    const [currentPage, setCurrentPage] = useState(data);

    const onMenuChange = (elem) => {
        setCurrentPage(elem.key);
        localStorage.setItem("head-component-page", elem.key);
    };

    return (
        <div className="center-side">
            <Menu className="nav-menu"
                  onClick={onMenuChange}
                  selectedKeys={[currentPage]}
                  expandIcon={<MenuOutlined />}
                  mode="horizontal">
                <Menu.Item key="clubs">
                    <Link to="/clubs"><ApartmentOutlined className="icon"/>Гуртки</Link>
                </Menu.Item>
                <Menu.Item key="challenge">
                    <Link to="/challenge"><CrownOutlined className="icon"/>Челлендж</Link>
                </Menu.Item>
                <Menu.Item key="news">
                    <Link to="/news"><ContainerOutlined className="icon"/>Новини</Link>
                </Menu.Item>
                <Menu.Item key="about">
                    <Link to="/about"><FolderOpenOutlined className="icon"/>Проєкт</Link>
                </Menu.Item>
                <Menu.Item key="service">
                    <Link to="/service"><FlagOutlined className="icon"/>Послуги українською</Link>
                </Menu.Item>
            </Menu>
        </div>
    );
};

export default NavMenu;