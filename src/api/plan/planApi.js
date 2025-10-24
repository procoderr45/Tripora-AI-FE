import axios from "axios";
import { BASE_URL } from "../../utils/constants";

const savePlan = async (data) => {
    try {
        const res = await axios.post(BASE_URL + "/plan/new", data, {
            withCredentials: true,
        });

        return res.data.plan;
    } catch (err) {
        throw new Error(err.response.data.message || err.message);
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
        return res.data.itinenary;
    } catch (err) {
        throw new Error(err.response.data.message || err.message);
    }
};

const getPlanData = async (planId) => {
    if (!planId) return null;

    const res = await axios.get(BASE_URL + "/plan/" + planId, {
        withCredentials: true,
    });

    return res.data.plan;
};

export default {
    savePlan,
    getItinerary,
    getPlanData,
};
