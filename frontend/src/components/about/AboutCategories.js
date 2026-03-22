import './css/AboutDescription.css';
import React, {useState, useEffect} from "react";
import {getPageableCategory} from "../../service/CategoryService";
import PrimitiveCard from "../PrimitiveCard";
import './css/AboutCategories.css';
import CategoryLogo from "../CategoryLogo";
import {Button, Layout, Pagination} from "antd";
import {searchParameters} from "../../context/SearchContext";
import {Link} from "react-router-dom";

const AboutCategories = () => {
    const [categories, setCategories] = useState({
        content: [],
        size: 0
    });
    const [currentPage, setCurrentPage] = useState(0);

    const getData = (page) => {
        getPageableCategory(page).then(response => {
            setCategories(response);
            console.log(response)
        });
    };

    useEffect(() => {
        getData(currentPage);
    }, []);

    const onPageChange = (page) => {
        setCurrentPage(page - 1);
        getData(page - 1);
    };

    return (
        <div className="about-categories">
            <div className="categories-header">
                <h2 className="label">Оберіть напрям гуртків</h2>
                <Link to="/clubs"><Button className="flooded-button more-button">Всі гуртки</Button></Link>
            </div>

            <div className="categories-cards">
                {categories.content.map(category =>
                    <PrimitiveCard key={category.id}
                                   header={
                                       <div className="title">
                                           <CategoryLogo category={category}/>
                                           <div className="name">{category.name}</div>
                                       </div>
                                   }
                                   description={"Ololo"}
                                   link={""}
                                   buttonText="Переглянути"/>
                )}
            </div>

            <Pagination
                className="pagination"
                hideOnSinglePage
                size="small"
                showSizeChanger={false}
                onChange={onPageChange}
                current={currentPage + 1}
                pageSize={categories.size}
                total={categories.totalElements}/>
        </div>
    );
};

export default AboutCategories;