import axios from "axios"
import { BASE_URL } from "../../utils/constants"

const loginUser = async (email, password) => {
    try {
        const res = await axios.post(BASE_URL + "/auth/login", {
            email, password
        }, {
            withCredentials: true
        })

        const user = res.data.user
        return user

    }
    catch (err) {
        throw new Error(err.response.data.message || err.message || "Something went wrong")
    }
}

export default {
    loginUser
}