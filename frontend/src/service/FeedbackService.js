import axios from "axios";
import {BASE_URL} from "../config/ApplicationConfig";

export const getFeedbackListByClubId = async (id) => {
    return await axios.get(BASE_URL + "/api/feedbacks/" + id).then((response) => {
        return response.data
    });
};
