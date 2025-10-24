import React from 'react'
import useGetUserPlans from '../../hooks/profile/useGetUserPlans'
import Spinner from '../common/Spinner'
import { CalendarDaysIcon, CurrencyRupeeIcon, MapPinIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const MyPlans = () => {

    const { isLoading, plans } = useGetUserPlans()

    console.log(plans)

    return (
        <div className='w-full h-screen mt-10'>
            <h1>My created plans</h1>

            {
                isLoading ? <div className='w-full h-full flex justify-center items-center'>
                    <Spinner />
                </div>
                    :
                    plans?.length == 0 ? <p className='text-red-500 text-center mt-4'>You haven't created any plan</p>
                        :
                        <div className="w-full px-20 py-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {plans?.map((plan, idx) => (
                                    <div
                                        key={idx}
                                        className="flex flex-col justify-between bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
                                    >
                                        <div className="bg-indigo-600 text-white px-4 py-3">
                                            <h3 className="text-lg font-semibold line-clamp-1">{plan.title}</h3>
                                        </div>

                                        <div className="p-5 flex flex-col gap-4 flex-grow">
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="flex items-center gap-3">
                                                    <UserGroupIcon className="w-6 h-6 text-indigo-600" />
                                                    <div>
                                                        <p className="text-xs text-gray-500 uppercase tracking-wider">With Whom</p>
                                                        <p className="text-gray-800 font-semibold">{plan.withWhom || "Solo"}</p>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-3">
                                                    <CurrencyRupeeIcon className="w-6 h-6 text-indigo-600" />
                                                    <div>
                                                        <p className="text-xs text-gray-500 uppercase tracking-wider">Budget</p>
                                                        <p className="text-gray-800 font-semibold">₹{plan.budget}</p>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-3">
                                                    <MapPinIcon className="w-6 h-6 text-indigo-600" />
                                                    <div>
                                                        <p className="text-xs text-gray-500 uppercase tracking-wider">From</p>
                                                        <p className="text-gray-800 font-semibold">{plan.fromLocation}</p>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-3">
                                                    <CalendarDaysIcon className="w-6 h-6 text-indigo-600" />
                                                    <div>
                                                        <p className="text-xs text-gray-500 uppercase tracking-wider">Days</p>
                                                        <p className="text-gray-800 font-semibold">{plan.numberOfDays}</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mt-2">
                                                <p className="text-sm text-gray-600 line-clamp-3">{plan.description}</p>
                                            </div>
                                        </div>

                                        <div className="bg-gray-50 px-4 py-3 text-center">
                                            <Link to={"/plan/" + plan._id} className="w-full block bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold py-2 rounded-lg transition">
                                                View Itinerary
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
            }
        </div>
    )
}

export default MyPlans