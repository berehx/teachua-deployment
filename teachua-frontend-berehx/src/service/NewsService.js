import axios from "axios";
import {BASE_URL} from "../config/ApplicationConfig";

export const getPageableNews = async (size) => {
    return await axios.get(BASE_URL + "/api/newslist/search?size=" + size).then((response) => {
        return response.data
    });
};
