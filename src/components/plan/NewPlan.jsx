import React, { useState } from 'react'
import SelectLocation from '../plan/SelectLocation'
import Modal from '../common/Modal'

const NewPlan = () => {

    const [open, setOpen] = useState(false)

    const [planData, setPlanData] = useState({
        description: "",
        fromLocation: "",
        budget: 0,
        withWhom: "",
        date: Date.now(),
        numberOfDays: 5,
        preferredPlaces: []
    })

    return (
        <>
            <Modal open={open} setOpen={setOpen} planData={planData} />
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="max-w-xl mx-auto">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">
                            Plan Your Perfect Trip — Let AI Build Your Itinerary                        </h1>
                        <p className="mt-1 text-gray-600">
                            Tell us your story and we’ll be in touch.
                        </p>
                    </div>

                    <div className="mt-12">
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="grid gap-4 lg:gap-6">
                                <div>
                                    <label htmlFor="hs-plan-description" className="block mb-2 text-sm text-gray-700 font-medium">Description and context of trip</label>
                                    <input type="text" name="hs-plan-description"
                                        value={planData.description}
                                        onChange={(e) => setPlanData({ ...planData, description: e.target.value })}
                                        required
                                        id="hs-plan-description" autoComplete="email" className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none border-2" />
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">

                                    <div>
                                        <label htmlFor="plan-fromLocation" className="block mb-2 text-sm text-gray-700 font-medium">From location</label>
                                        <input value={planData.fromLocation} onChange={(e) => setPlanData({ ...planData, fromLocation: e.target.value })} type="text" name="plan-fromLocation"
                                            required id="plan-fromLocation" className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 border-2 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" />
                                    </div>

                                    <div>
                                        <label htmlFor="plan-numberOfDays" className="block mb-2 text-sm text-gray-700 font-medium">Number of days</label>
                                        <input value={planData.numberOfDays} onChange={(e) => setPlanData({ ...planData, numberOfDays: e.target.value })} type="number" name="plan-numberOfDays"
                                            required id="plan-numberOfDays" className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 border-2 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" />
                                    </div>

                                    <div>
                                        <label htmlFor="plan-date" className="block mb-2 text-sm text-gray-700 font-medium">Start Date</label>
                                        <input type="date" name="plan-date"
                                            required
                                            value={planData.date}
                                            onChange={(e) => setPlanData({ ...planData, date: e.target.value })}
                                            id="plan-date" className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 border-2 disabled:pointer-events-none" />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="plan-fromLocation" className=" mb-2 text-sm text-gray-700 font-medium">Preffered locations</label>

                                    <SelectLocation />
                                </div>



                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                                    <div>
                                        <label htmlFor="plan-withWhom" className="block mb-2 text-sm text-gray-700 font-medium">With whome</label>
                                        <input
                                            value={planData.withWhom}
                                            onChange={(e) => setPlanData({ ...planData, withWhom: e.target.value })}
                                            type="text" name="plan-withWhom"
                                            required
                                            id="plan-withWhom" className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm border-2 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" />
                                    </div>

                                    <div>
                                        <label htmlFor="plan-budget" className="block mb-2 text-sm text-gray-700 font-medium">Budget</label>
                                        <input
                                            value={planData.budget} onChange={(e) => setPlanData({ ...planData, budget: e.target.value })}
                                            type="text" name="plan-budget" id="plan-budget"
                                            required className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg border-2 sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="hs-about-hire-us-2" className="block mb-2 text-sm text-gray-700 font-medium">Takeway from this trip</label>

                                    <textarea id="hs-about-hire-us-2"
                                        required name="hs-about-hire-us-2" rows="4" className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 border-2 disabled:pointer-events-none"></textarea>
                                </div>
                            </div>

                            {/* <div className="mt-3 flex">
                                <div className="flex">
                                    <input id="remember-me" name="remember-me" type="checkbox" className="shrink-0 mt-1.5 border-gray-200 rounded-sm text-blue-600 focus:ring-blue-500" />
                                </div>
                                <div className="ms-3">
                                    <label htmlFor="remember-me" className="text-sm text-gray-600">By submitting this form I have read and acknowledged the <a className="text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium" href="#">Privact policy</a></label>
                                </div>
                            </div> */}

                            <div className="mt-6 grid">
                                <button
                                    type="button"
                                    onClick={() => setOpen(true)}
                                    className="rounded-md bg-white/10  px-2.5 py-1.5 text-sm font-semibold text-black inset-ring inset-ring-white/5 hover:bg-white/20"
                                >
                                    Start generating itinerary
                                </button>
                            </div>

                            <div className="mt-3 text-center">
                                <p className="text-sm text-gray-500">
                                    We'll get back to you in 1-2 business days.
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewPlan