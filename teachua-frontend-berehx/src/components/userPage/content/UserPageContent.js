import React from "react";
import {Content} from "antd/es/layout/layout";
import './css/UserContent.css';


const UserPageContent = () => {
    return (
        <Content className="user-content">
            <div className="content-title">Мій профіль</div>
        </Content>
    )
};

// UserPageContent.propTypes = {
//     user: PropTypes.object.isRequired
// };


export default UserPageContent;