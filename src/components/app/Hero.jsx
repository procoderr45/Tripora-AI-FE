import React from 'react'
import Timeline from '../plan/Timeline'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className="relative pt-48 pb-12 z-10 xl:pt-60 sm:pb-16 lg:pb-32 w-full xl:pb-48 2xl:pb-56 w-full">
            <div className='relative px-6 pt-10 sm:pt-4 md:px-0 -top-30  z-1000 bg-transparent w-full'>
                <h1 className='text-white text-center text-5xl font-mono font-thin '>Take the roads towards the life with <br /> <span className='text-6xl font-serif italic font-bold'>Tripora</span></h1>
                <div className='w-full mt-8 flex justify-center items-center'>
                    <Link to="/login" className="px-4 py-2 font-sans text-base font-semibold transition-all duration-200 border-2 border-transparent rounded-full sm:leading-8 bg-white sm:text-lg text-black hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-secondary mx-auto text-center" role="button">Get started</Link>
                </div>
            </div>
            <div className="absolute inset-0 ">
                <img className="brightness-50 object-cover w-screen h-screen" src="https://images.pexels.com/photos/2174656/pexels-photo-2174656.jpeg" alt="" />
            </div>

            <div className='relative -bottom-40 sm:-bottom-80 md:-bottom-80 text-center'>
                <p className='text-white font-mono italic'>"Travel not to escape life, but for life not to escape you."</p>
            </div>

        </div>

    )
}

export default Hero