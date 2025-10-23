import React, { useEffect } from 'react'
import Stepper from './Stepper'

const ItineraryProgress = ({ setIsStarted, messages, currentTask, handleItineraryStart }) => {

    useEffect(() => {
        handleItineraryStart()
    }, [messages, currentTask])

    return (
        <>
            <Stepper messages={messages} currentTask={currentTask} />
        </>
    )
}

export default ItineraryProgress