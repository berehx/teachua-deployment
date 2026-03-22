import {Layout} from "antd";
import {withRouter} from 'react-router-dom';
import React from "react";
import PageHeader from "./header/PageHeader";
import PageContent from "./content/PageContent";
import PageSider from "./sider/PageSider";
import {getClubById} from "../../service/ClubService";
import Loader from "../Loader";
import './css/ClubPage.css';
import PageComments from "./comments/PageComments";
import {getFeedbackListByClubId} from "../../service/FeedbackService";

class ClubPage extends React.Component {
    state = {
        club: {},
        feedback: []
    };

    getData = () => {
        let clubId = this.props.match.params.id;

        getClubById(clubId).then(response => {
            this.setState({club: response});
        });
        getFeedbackListByClubId(clubId).then(response => {
            this.setState({feedback: response});
        });
    };

    componentDidMount() {
        this.getData();
    }

    componentDidUpdate(preProps) {
        if (preProps.match.params.id !== this.props.match.params.id) {
            this.getData();
        }
    }

    render() {
        return !this.state.club.categories ? <Loader/> : (
            <Layout>
                <PageHeader club={this.state.club}/>
                <Layout className="club-page" style={{padding: 40, background: 'white'}}>
                    <PageContent club={this.state.club} feedbackCount={this.state.feedback.length}/>
                    <PageSider club={this.state.club}/>
                </Layout>
                <PageComments feedback={this.state.feedback}/>
            </Layout>)
    }
}

export default withRouter(ClubPage);