import React, { useEffect, useState } from "react";
import {
    MapPinIcon,
    CalendarDaysIcon,
    UserGroupIcon,
    CurrencyRupeeIcon,
    PencilIcon,
    TagIcon,
    ClockIcon,
} from "@heroicons/react/24/outline";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";
import planApi from "../../api/plan/planApi";
import Timeline from "./Timeline";
import Spinner from "../common/Spinner";

const PlanDetails = () => {
    const planId = useParams().id
    const [planData, setPlanData] = useState(null)

    const getPlanData = async () => {
        try {
            const plan = await planApi.getPlanData(planId)

            setPlanData(plan)

        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getPlanData()
    }, [planId])


    if (!planData) return null;

    return (
        <div className="w-full mt-20 max-w-3xl mx-auto my-10 px-4">
            <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white p-6">
                    <h2 className="text-2xl font-bold">🌍 Trip Overview</h2>
                    <p className="text-sm text-indigo-100 mt-1">{planData.description}</p>
                </div>

                <div className="p-6 space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex items-center gap-3">
                            <MapPinIcon className="w-6 h-6 text-indigo-600" />
                            <div>
                                <p className="text-xs text-gray-500 uppercase tracking-wider">
                                    From Location
                                </p>
                                <p className="text-gray-800 font-semibold">
                                    {planData.fromLocation || "N/A"}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <CalendarDaysIcon className="w-6 h-6 text-indigo-600" />
                            <div>
                                <p className="text-xs text-gray-500 uppercase tracking-wider">
                                    Travel Date
                                </p>
                                <p className="text-gray-800 font-semibold">
                                    {new Date(planData.date).toLocaleDateString()}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex items-center gap-3">
                            <UserGroupIcon className="w-6 h-6 text-indigo-600" />
                            <div>
                                <p className="text-xs text-gray-500 uppercase tracking-wider">
                                    With Whom
                                </p>
                                <p className="text-gray-800 font-semibold">
                                    {planData.withWhom || "Solo"}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <CurrencyRupeeIcon className="w-6 h-6 text-indigo-600" />
                            <div>
                                <p className="text-xs text-gray-500 uppercase tracking-wider">
                                    Budget
                                </p>
                                <p className="text-gray-800 font-semibold">
                                    ₹{planData.budget.toLocaleString()}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex items-center gap-3">
                            <ClockIcon className="w-6 h-6 text-indigo-600" />
                            <div>
                                <p className="text-xs text-gray-500 uppercase tracking-wider">
                                    Duration
                                </p>
                                <p className="text-gray-800 font-semibold">
                                    {planData.numberOfDays} days
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <TagIcon className="w-6 h-6 text-indigo-600" />
                            <div>
                                <p className="text-xs text-gray-500 uppercase tracking-wider">
                                    Itinerary Key
                                </p>
                                <p className="text-gray-800 font-semibold truncate">
                                    {planData.itineraryKey || "N/A"}
                                </p>
                            </div>
                        </div>
                    </div>

                    {planData.preferredPlaces && planData.preferredPlaces.length > 0 && (
                        <div>
                            <h3 className="text-sm text-gray-500 uppercase tracking-wider mb-2">
                                Preferred Places
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {planData.preferredPlaces.map((place, index) => (
                                    <span
                                        key={index}
                                        className="bg-indigo-100 text-indigo-700 text-sm font-medium px-3 py-1 rounded-full hover:bg-indigo-200 transition-colors"
                                    >
                                        {place}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="border-t pt-4 flex justify-between items-center text-sm text-gray-500">
                        <button className="mx-auto bg-gray-700 px-4 py-2 rounded-lg text-white flex items-center gap-2 hover:bg-transparent hover:border-2  border-2 hover:border-black border-transparent hover:text-indigo-800 font-medium">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px">
                                <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z" />
                            </svg>
                            Regenerate
                        </button>
                    </div>

                    {
                        planData.itinerary ?
                            <Timeline itinerary={JSON.parse(planData?.itinerary)} />
                            : <div className="w-full"><Spinner /></div>
                    }
                </div>
            </div>
        </div>
    );
};

export default PlanDetails;
