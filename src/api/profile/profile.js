import axios from "axios"
import { BASE_URL } from "../../utils/constants"

const getLoggedInUser = async () => {
    try {
        const res = await axios.get(BASE_URL + "/profile/view", {
            withCredentials: true
        })

        return res.data.user
    }
    catch (err) {
        throw new Error(err.response.data.message || err.message)
    }
}

export default {
    getLoggedInUser
}