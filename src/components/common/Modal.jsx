'use client'

import { useEffect, useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import updateStepperMessage from '../../utils/itinerary/updateStepperMessage'
import planApi from '../../api/plan/planApi'
import { MapPinIcon } from '@heroicons/react/24/solid'
import ItineraryProgress from '../plan/ItineraryProgress'
import Spinner from './Spinner'
import { Link } from 'react-router-dom'

{/* 
    Task numbers
    1. create and save plan
    2. ask ai to generate daywise itinerary
    3. strucuture daywise itinerary
    
*/}

export default function Modal({ open, setOpen, planData }) {
    const [isCompleted, setIsCompleted] = useState(false)
    const [isStarted, setIsStarted] = useState(false)
    const [error, setError] = useState("")
    const [itinerary, setItinerary] = useState({})

    const [currentTask, setCurrentTask] = useState(0)
    const [messages, setMessages] = useState([
        {
            message: "Create and save plan",
            status: "incomplete",
        },
        {
            message: "AI will think on your plan",
            status: "incomplete"
        }
    ])

    async function handleItineraryStart() {
        try {

            if (isCompleted) {
                return;
            }

            let newMessages = updateStepperMessage(messages, 0, "Creating and saving plan", "ongoing")
            setMessages(newMessages)

            const createdData = await planApi.savePlan(planData)
            newMessages = updateStepperMessage(newMessages, 0, "Saved plan successfully", "completed")

            setCurrentTask(prev => prev + 1)
            newMessages = updateStepperMessage(newMessages, 1, "AI is thinking on your plan", "ongoing")
            setMessages(newMessages)


            const createdItinerary = await planApi.getItinerary(createdData._id)
            newMessages = updateStepperMessage(newMessages, 1, "AI generated day wise itinerary plan", "completed")
            setCurrentTask(prev => prev + 1)

            setMessages(newMessages)

            setItinerary(createdItinerary)

        }
        catch (err) {
            console.log(err)
            setError(err.message)
        }
        finally {
            console.log(currentTask)
            updateStepperMessage(messages, currentTask, messages[currentTask].message, "failed")
            // setCurrentTask(-1)
            setIsCompleted(true)
            setIsStarted(false)
        }
    }


    return (
        <div>

            <Dialog open={open} onClose={setOpen} className="relative z-10">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-gray-900/50 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
                />

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                        <DialogPanel
                            transition
                            className="relative transform overflow-hidden rounded-lg bg-gray-800 text-left shadow-xl outline -outline-offset-1 outline-white/10 transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
                        >
                            <div className="bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-500/10 sm:mx-0 sm:size-10">
                                        <MapPinIcon aria-hidden="true" className="size-6 text-red-400" />
                                    </div>
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <DialogTitle as="h3" className="text-base font-semibold text-white">
                                            Generate itinerary plan
                                        </DialogTitle>
                                        {
                                            !isStarted && !isCompleted ?
                                                <div className="mt-2">
                                                    <p className="text-sm text-gray-400">
                                                        Ready to start your itinerary plan?
                                                        We’ll use your entered trip details to create a personalized day-by-day itinerary.
                                                        You won’t be able to change your inputs afterward.
                                                    </p>
                                                    <p className='mt-3 text-red-500'>{error}</p>
                                                </div> :

                                                <ItineraryProgress handleItineraryStart={handleItineraryStart} currentTask={currentTask} messages={messages} />
                                        }
                                    </div>
                                </div>
                            </div>
                            {
                                !isStarted && !isCompleted ?
                                    <div className=" px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        <button
                                            type="button"
                                            onClick={() => setIsStarted(true)}
                                            className="inline-flex w-full justify-center rounded-md bg-gray-700 px-3 py-2 text-sm font-semibold text-white hover:bg-redgray-700 sm:ml-3 sm:w-auto"
                                        >
                                            Generate
                                        </button>
                                        <button
                                            type="button"
                                            data-autofocus
                                            onClick={() => setOpen(false)}
                                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white inset-ring inset-ring-white/5 hover:bg-white/20 sm:mt-0 sm:w-auto"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                    :
                                    !isCompleted ?
                                        <div>
                                            <button
                                                type="button"
                                                onClick={() => setIsStarted(true)}
                                                className="inline-flex w-full justify-center rounded-md bg-gray-700 px-3 py-2 text-sm font-semibold text-white hover:bg-redgray-700 sm:ml-3 sm:w-auto"
                                            >
                                                <Spinner />
                                            </button>
                                        </div>
                                        :
                                        !error ?
                                            <div className=" px-4 py-3 sm:flex justify-center items-center sm:flex-row-reverse sm:px-6">
                                                <Link
                                                    to={"/plan/" + planData?._id}
                                                    type="button"
                                                    data-autofocus
                                                    onClick={() => setOpen(false)}
                                                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white inset-ring inset-ring-white/5 hover:bg-white/20 sm:mt-0 sm:w-auto"
                                                >
                                                    Check Daywise itinerary
                                                </Link>
                                            </div> :

                                            <p className='mt-4 text-red-500 text-center'>{error}</p>
                            }
                        </DialogPanel>
                    </div>
                </div >
            </Dialog >
        </div >
    )
}
