import React from 'react'
import Spinner from '../common/Spinner'

const Stepper = ({ messages, currentTask }) => {

    console.log("Updated messages", messages)

    return (
        <ol className=" overflow-hidden space-y-8">
            {
                messages.map((message, index) => (
                    index === currentTask ?
                        <li key={message.message} className="text-white relative flex-1 ">
                            <div className="flex items-center font-medium w-full  ">
                                <span className="w-8 h-8 bg-white border-2 border-transparent rounded-full flex justify-center items-center mr-3 text-sm text-white lg:w-10 lg:h-10">
                                    <Spinner />
                                </span>
                                <div className="block">
                                    <h4 className="text-lg  text-indigo-600">Step {index + 1}</h4>
                                    <span className="text-sm">{message.message}</span>
                                </div>
                            </div>
                        </li> :

                        index < currentTask ?
                            <li key={message.message} className="text-white relative flex-1 after:content-['']  after:w-0.5 after:h-full  after:bg-indigo-600 after:inline-block after:absolute after:-bottom-11 after:left-4 lg:after:left-5">
                                <div className="flex items-center font-medium w-full  ">
                                    <span className="w-8 h-8 bg-indigo-600 border-2 border-transparent rounded-full flex justify-center items-center mr-3 text-sm text-white lg:w-10 lg:h-10">
                                        <svg className="w-5 h-5 stroke-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 12L9.28722 16.2923C9.62045 16.6259 9.78706 16.7927 9.99421 16.7928C10.2014 16.7929 10.3681 16.6262 10.7016 16.2929L20 7" stroke="stroke-current" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="my-path"></path>
                                        </svg>
                                    </span>
                                    <div className="block">
                                        <h4 className="text-lg  text-indigo-600">Step {index + 1}</h4>
                                        <span className="text-sm">{message.message}</span>
                                    </div>
                                </div>
                            </li> :

                            message.status === "failed" ?

                                <li key={message.message} className="text-white relative flex-1 ">
                                    <div className="flex items-center font-medium w-full  ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-triangle">
                                            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                                            <line x1="12" y1="9" x2="12" y2="13"></line>
                                            <line x1="12" y1="17" x2="12.01" y2="17"></line>
                                        </svg>
                                        <div className="block">
                                            <h4 className="text-lg  text-gray-900">Step {index + 1} (failed)</h4>
                                            <span className="text-sm">{message.message}</span>
                                        </div>
                                    </div>
                                </li> :

                                <li key={message.message} className="text-white relative flex-1 ">
                                    <div className="flex items-center font-medium w-full  ">
                                        <span className="w-8 h-8 bg-red-500 border-2 border-gray-200 rounded-full flex justify-center items-center mr-3 text-sm  lg:w-10 lg:h-10">{index + 1}</span>
                                        <div className="block">
                                            <h4 className="text-lg  text-gray-900">Step {index + 1}</h4>
                                            <span className="text-sm">{message.message}</span>
                                        </div>
                                    </div>
                                </li>
                ))
            }

        </ol>
    )
}

export default Stepper