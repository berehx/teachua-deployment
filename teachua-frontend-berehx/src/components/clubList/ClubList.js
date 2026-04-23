import {Layout, Pagination, Space} from "antd";
import {clearSearchParameters, searchParameters} from "../../context/SearchContext";
import React from "react";
import ClubCardItem from "./ClubCardItem";
import {getClubsByParameters} from "../../service/ClubService";
import EmptySearch from "./EmptySearch";
import Loader from "../Loader";
import PropTypes from "prop-types";

class ClubList extends React.Component {
    getData = () => {
        this.props.load(true);

        getClubsByParameters(searchParameters).then(response => {
            this.props.setClubs(response);
            this.props.load(false)
        });
    };

    componentDidMount() {
        clearSearchParameters();
        this.getData();
    }

    onPageChange = (page) => {
        searchParameters.page = page - 1;

        this.getData();
    };

    render() {
        return this.props.loading ? <Loader/> : this.props.clubs.content.length === 0 ? <EmptySearch/> : (
            <Layout className="clubs">
                <Space wrap className="cards" size={[0, 0]}>
                    {this.props.clubs.content.map((club, index) => <ClubCardItem club={club} key={index}/>)}
                </Space>

                <Pagination className="pagination"
                            hideOnSinglePage
                            showSizeChanger={false}
                            onChange={this.onPageChange}
                            current={searchParameters.page + 1}
                            pageSize={this.props.clubs.size + 1}
                            total={this.props.clubs.totalElements}/>

            </Layout>)
    }
}

ClubList.propTypes = {
    clubs: PropTypes.object.isRequired,
    setClubs: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    load: PropTypes.func.isRequired,
};

export default ClubList;

