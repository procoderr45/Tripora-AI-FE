import axios from "axios";
import { BASE_URL } from "../../utils/constants";

const savePlan = async (data) => {
    try {
        const res = await axios.post(BASE_URL + "/plan/new", data, {
            withCredentials: true,
        });

        return res.data.plan;
    } catch (err) {
        console.log(err);
    }
};

const getItinerary = async (planId) => {
    try {
        const res = await axios.post(
            BASE_URL + "/itinenary/generate/" + planId,
            {},
            {
                withCredentials: true,
            }
        );

        // TODO:
        return res.data.itinerary;
    } catch (err) {
        console.log(err);
    }
};

export default {
    savePlan,
    getItinerary,
};
