import axios from "axios";
import {BASE_URL} from "../config/ApplicationConfig";

export const getPageableCategory = async (page) => {
    return await axios.get(BASE_URL + "/api/categories/search?page=" + page).then((response) => {
        return response.data
    });
};

export const getAllCategories = async () => {
    return await axios.get(BASE_URL + "/api/categories").then((response) => {
        return response.data
    });
};