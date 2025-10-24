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

const registerUser = async (name, email, password) => {
    try {
        const res = await axios.post(BASE_URL + "/auth/register", {
            name,
            email, password
        }, {
            withCredentials: true
        })

        const user = res.data.user
        return user;

    }
    catch (err) {
        throw new Error(err.response.data.message || err.message)
    }
}

const logoutUser = async () => {
    try {
        console.log("Signing out")
        const res = await axios.post(BASE_URL + "/auth/logout", {}, {
            withCredentials: true
        })

        return res.data.message;
    }
    catch (err) {
        console.log(err)
        throw new Error(err.response.data.message || err.message)
    }
}

export default {
    loginUser,
    registerUser,
    logoutUser
}