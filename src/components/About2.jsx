import React from 'react'
import myPic2 from '../assets/me2.1.png'
import { motion } from "framer-motion"

const About2 = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <h1 className="my-20 text-center text-4xl">About Me
                </h1>
            <div className="flex flex-wrap">
                <motion.div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img className='rounded-2xl' src={myPic2} alt="Dishma Bhashitha 2" />
                    </div>

                </motion.div>
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className='my-2 max-w-xl py-6'>I recognize myself as a self-motivated, confident, hardworking individual, who always enthusiastic to learn and capable of working in dynamic environments. My career objective is to attain a position of as an Intern Frontend developer, where I can challenge myself and improve my skills along with supporting the development of the organization.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About2