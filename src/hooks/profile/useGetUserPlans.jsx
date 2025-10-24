import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../utils/constants'

const useGetUserPlans = () => {

    const [plans, setPlans] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const getUserCreatedPlans = async () => {
        try {
            const res = await axios.get(BASE_URL + "/profile/plans", {
                withCredentials: true
            })

            console.log(res)

            setPlans(res.data.plans)

        }
        catch (err) {
            console.log(err)
        }
        finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getUserCreatedPlans()
    }, [])

    return {
        isLoading,
        plans
    }
}

export default useGetUserPlans