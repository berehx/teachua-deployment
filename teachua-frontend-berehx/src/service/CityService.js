import axios from "axios";
import {BASE_URL} from "../config/ApplicationConfig";

export const getCityById = async (id) => {
    return await axios.get( BASE_URL + "/api/city/" + id).then((response) => {
        return response.data
    });
};

export const getAllCities = async () => {
    return await axios.get(BASE_URL + "/api/cities").then((response) => {
        return response.data
    });
};