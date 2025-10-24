import React from 'react'
import { PhoneIcon } from '@heroicons/react/24/outline'

const Timeline = ({ itinerary }) => {
    return (
        <div className="w-full max-w-4xl mx-auto my-10 px-4">
            {itinerary?.daywisePlan?.map((day, index) => (
                <div key={index} className="mb-12">
                    <div className="relative pl-3 border-l-4 border-indigo-500">
                        <h3 className="text-xs font-semibold uppercase text-gray-400 tracking-wider">
                            {new Date(day.date).toLocaleDateString()}
                        </h3>
                        <h1 className="text-xl font-bold text-gray-800 mt-1 flex flex-wrap items-center gap-2">
                            {day.title}
                            <span className="text-indigo-600 text-lg">📍</span>
                            <span className="text-gray-600 break-words">{day.location}</span>
                        </h1>
                    </div>

                    <div className="mt-6 space-y-6 pl-5">
                        {day.activities.map((activity, idx) => (
                            <div
                                key={idx}
                                className="flex gap-x-4 group relative border border-gray-200 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 hover:border-indigo-400 overflow-hidden" // ✅ Added overflow-hidden
                            >
                                <div className="absolute -left-5 top-6 flex flex-col items-center">
                                    <div className="w-3 h-3 rounded-full bg-indigo-500 group-hover:scale-110 transition-all duration-200"></div>
                                    {idx !== day.activities.length - 1 && (
                                        <div className="w-px h-full bg-gray-200 mt-1"></div>
                                    )}
                                </div>

                                <div className="flex-1 p-4 min-w-0"> {/* ✅ min-w-0 fixes text overflow */}
                                    <h3 className="font-semibold text-gray-800 text-lg mb-1 flex flex-wrap items-center gap-2">
                                        {activity.title}
                                        <span className="text-indigo-500 text-sm">📍</span>
                                    </h3>

                                    <p className="text-gray-600 text-sm leading-relaxed break-words line-clamp-4 sm:line-clamp-none">
                                        {/* ✅ line-clamp limits text on small screens */}
                                        {activity.description}
                                    </p>

                                    {activity.images && activity.images.length > 0 && (
                                        <div className="mt-3 overflow-x-auto"> {/* ✅ Changed scroll container */}
                                            <div className="flex gap-3 pb-2">
                                                {activity.images.map((image, i) => (
                                                    <img
                                                        key={i}
                                                        src={image}
                                                        alt={`Activity ${i}`}
                                                        className="w-36 h-36 rounded-lg object-cover flex-shrink-0 hover:scale-105 transition-transform duration-300 border border-gray-100"
                                                        style={{ maxWidth: "100%" }} // ✅ prevents overflow
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {day.localGuideContact && day.localGuideContact.length > 0 && (
                        <div className="mt-8 pl-5">
                            <h2 className="text-lg font-semibold text-indigo-600 mb-3 flex items-center gap-2">
                                Local Guide Contacts
                            </h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {day.localGuideContact.map((guide, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center justify-start border border-gray-200 rounded-lg p-4 bg-gray-50 hover:bg-indigo-50 transition-all duration-200"
                                    >
                                        <PhoneIcon className="w-4 h-4 text-gray-500 mr-2" />
                                        <p className="text-gray-600 text-sm break-all">{guide}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default Timeline
