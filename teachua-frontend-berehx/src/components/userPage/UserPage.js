import React from "react";
import Layout, {Content, Footer, Header} from "antd/es/layout/layout";
import {withRouter} from "react-router";
import SiderComponent from "./sider/UserSider";
import UserPageContent from "./content/UserPageContent";
import Sider from "antd/es/layout/Sider";
import '../userPage/css/User.less'



class UserPage extends React.Component {


    // state = {
    //     user: {}
    // };
    //
    // getData = () => {
    //     getUserById(this.props.match.params.id).then(response => {
    //         this.setState({user: response});
    //     });
    // };
    //
    // componentDidMount() {
    //     this.getData();
    // }
    //
    // componentDidUpdate(preProps) {
    //     if(preProps.match.params.id !== this.props.match.params.id) {
    //         this.getData();
    //     }
    // }

    render() {
        return (

            <Layout>
                <Sider><SiderComponent/></Sider>
                <Content><UserPageContent/></Content>
            </Layout>
    )

    }
}

export default withRouter(UserPage)