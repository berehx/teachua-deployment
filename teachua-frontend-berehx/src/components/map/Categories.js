import React, {useEffect, useState} from "react";
import {Select} from "antd";
import {mapSearchParameters} from "../../context/SearchContext";
import {getClubsByParameters} from "../../service/ClubService";
import {getAllCategories} from "../../service/CategoryService";
import './css/Categories.css';


const Categories = ({setMapClubs}) => {
    const {Option} = Select;
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getAllCategories().then(response => setCategories(response));
    }, []);

    const onCityChange = (value) => {
        mapSearchParameters.categoryName = value;
        getClubsByParameters(mapSearchParameters).then(response => setMapClubs(response)
        );
    };

    return (
        <Select
            className="selectCity"
            onChange={onCityChange}
            showSearch
            placeholder="Всі категорії"
            style={{borderRadius: '15px'}}
        >
            <Option value="">всі категорії</Option>
            {categories.map(category => (<Option value={category.name}>{category.name}</Option>))}

        </Select>
    )
}

export default Categories;