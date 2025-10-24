import axios from "axios";
import { BASE_URL } from "../../utils/constants";

const getLoggedInUser = async () => {
    try {
        const res = await axios.get(BASE_URL + "/profile/view", {
            withCredentials: true,
        });

        return res.data.user;
    } catch (err) {
        throw new Error(err.response.data.message || err.message);
    }
};

const updateProfile = async (updateData) => {
    try {
        const res = await axios.patch(BASE_URL + "/profile/edit", updateData, {
            withCredentials: true,
        });

        return res.data;
    } catch (err) {
        throw new Error(err.response.data.message || err.message);
    }
};

export default {
    getLoggedInUser,
    updateProfile,
};
