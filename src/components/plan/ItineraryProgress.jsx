import React, { useEffect } from 'react'
import Stepper from './Stepper'

const ItineraryProgress = ({ setIsStarted, messages, currentTask, handleItineraryStart }) => {

    useEffect(() => {
        handleItineraryStart()
    }, [])

    useEffect(() => {

    }, [messages, currentTask])

    return (
        <>
            <Stepper messages={messages} currentTask={currentTask} />
        </>
    )
}

export default ItineraryProgress