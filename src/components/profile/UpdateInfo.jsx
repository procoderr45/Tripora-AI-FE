import React, { useEffect, useState } from 'react'
import profile from '../../api/profile/profile'
import Spinner from '../common/Spinner'
import { useSelector } from 'react-redux'

const UpdateInfo = () => {

    const loggedInUser = useSelector((store) => store.user.user)
    const [user, setUser] = useState({
        name: "",
        bio: "",
        hobbies: [],
        location: {
            city: "",
            state: "",
            country: ""
        },
        email: ""

    })

    const [toastMessage, setToastMessage] = useState("")

    const [error, setError] = useState("")

    const [isLoading, setIsLoading] = useState(false)


    const handleUpdateProfile = async () => {
        setIsLoading(true)
        try {
            const res = await profile.updateProfile(user)

            setUser(res.user)
            setToastMessage(res.message)
        }
        catch (err) {
            setError(err.message || "Something went wrong")
        }
        finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        setUser(loggedInUser)
    }, [loggedInUser])

    useEffect(() => {
        const timer = setTimeout(() => {
            setToastMessage("")
        }, 4000)

        return () => {
            clearTimeout(timer)
        }

    }, [toastMessage])

    if (!user) {
        return <div className='w-full h-screen flex justify-center items-center'>
            <Spinner />
        </div>
    }

    return (
        <section className="bg-white dark:bg-gray-900 mt-16">
            <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
                {toastMessage && <p className='absolute right-10 top-20 py-2 bg-white pr-2 text-black'><span className='pl-1 pr-2'>✅</span> {toastMessage}</p>}
                <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Update product</h2>
                <form onSubmit={(e) => e.preventDefault()} action="#">
                    <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5 w-full">
                        <div className="sm:col-span-2">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                            <input type="text" name="name" value={user?.name || ""} onChange={(e) => setUser({ ...user, name: e.target.value })} id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter your name here" required="" />
                        </div>
                        <div className="w-full">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input type="email" name="email" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" defaultValue={user.email || ""} placeholder="Product brand" disabled required="" />
                        </div>
                        <div>
                            <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your hobbies</label>
                            <input type="text" name="hobbies" id="hobbies" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value={user.hobbies?.toString(",") || ""} onChange={(e) => setUser({ ...user, hobbies: e.target.value })} placeholder="Enter your hobbies by comma seperated " required={true} />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 w-full">

                            <div className='w-full'>
                                <label htmlFor="user-city" className="block w- mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
                                <input value={user.location?.city} onChange={(e) => setUser({ ...user, location: { ...user.location, city: e.target.value } })} type="text" name="user-city"
                                    required id="user-city" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 " />
                            </div>

                            <div className='w-full'>
                                <label htmlFor="user-state" className="block mb-2 text-sm  font-medium text-gray-900 dark:text-white">State</label>
                                <input value={user.location?.state} onChange={(e) => setUser({ ...user, location: { ...user.location, state: e.target.value } })} type="text" name="user-state"
                                    required id="user-country" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                            </div>

                            <div className='w-full'>
                                <label htmlFor="user-country" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Coutnry</label>
                                <input value={user.location?.country} onChange={(e) => setUser({ ...user, location: { ...user?.location, country: e.target.value } })} type="text" name="user-country"
                                    required id="user-country" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="bio" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                            <textarea id="bio" rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value={user.bio || ""} placeholder="Write about you..." onChange={(e) => setUser({ ...user, bio: e.target.value })}>{user.bio || ""}</textarea>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button type="button" onClick={handleUpdateProfile} className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mx-auto mt-5 bg-black hover:bg-gray-600">
                            {!isLoading ? "Update profile" : <Spinner />}
                        </button>

                    </div>
                    {error && <p className='text-red-500 mt-2 text-center'>{error}</p>}
                </form>
            </div>
        </section>
    )
}

export default UpdateInfo