import {Select} from "antd";
import React from "react";
import {clearSearchParameters, SearchContext, searchParameters} from "../context/SearchContext";
import {getClubsByParameters} from "../service/ClubService";
import {getPossibleResults, getPossibleResultsByText} from "../service/SearchService";
import ControlOutlined from "@ant-design/icons/lib/icons/ControlOutlined";

const {Option, OptGroup} = Select;

class Search extends React.Component {
    static contextType = SearchContext;

    state = {
        searchText: '',
        possibleResults: {
            categories: [],
            clubs: []
        }
    };

    onSearchChange = (value) => {
        let parameter = value.split("#")[0],
            name = value.split("#")[1];

        clearSearchParameters();

        if (parameter === "category") {
            searchParameters.categoryName = name;
        } else if (parameter === "club") {
            searchParameters.clubName = name;
        }

        getClubsByParameters(searchParameters).then(response => {
            this.context.setClubs(response);
        });
    };


    onFocus = () => {
        getPossibleResults(searchParameters).then(response => {
            this.setState({possibleResults: response});
        });
    };

    onKeyDown = (event) => {
        if (event.key === 'Enter') {
            this.onSearchChange("club#" + this.state.searchText)
        }
    };

    onSearch = (val) => {
        getPossibleResultsByText(val, searchParameters).then(response => this.setState({possibleResults: response}));

        this.setState({searchText: val});
    };

    render() {
        return (
            <div className="search">
                <Select
                    showSearch
                    /*allowClear*/
                    onChange={this.onSearchChange}
                    onSearch={this.onSearch}
                    onFocus={this.onFocus}
                    onInputKeyDown={this.onKeyDown}
                    style={{width: 200}}
                    placeholder="Який гурток шукаєте?"
                    optionFilterProp="children"
                    defaultActiveFirstOption={false}>

                    <OptGroup label="Категорії">
                        {
                            this.state.possibleResults.categories.map(result => (
                                <Option value={"category" + "#" + result.name}
                                        key={"category" + "#" + result.id}>
                                    {result.name}
                                </Option>)
                            )
                        }
                    </OptGroup>
                    <OptGroup label="Гуртки">
                        {
                            this.state.possibleResults.clubs.map(result => (
                                <Option value={"club" + "#" + result.name}
                                        key={"club" + "#" + result.id}>
                                    {result.name}
                                </Option>)
                            )
                        }
                    </OptGroup>
                </Select>

                <ControlOutlined className="advanced-icon"/>
            </div>
        );
    }
}

export default Search;