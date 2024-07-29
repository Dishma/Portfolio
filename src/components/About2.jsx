import React from 'react'
import myPic2 from '../assets/me2.1.png'
import { motion } from "framer-motion"

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
});

const About2 = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <motion.h1
                className="my-20 text-center text-4xl"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
            >
                About Me
            </motion.h1>
            <div className="flex flex-wrap">
                <motion.div
                    className="w-full lg:w-1/2 lg:p-8"
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex items-center justify-center">
                        <img className='rounded-2xl border-4 border-cyan-400 p-4' src={myPic2} alt="Dishma Bhashitha 2" />
                    </div>

                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2"
                >

                    <div className="flex justify-center lg:justify-start">
                        <p className='my-2 max-w-xl py-6'>I recognize myself as a self-motivated, confident, hardworking individual, who always enthusiastic to learn and capable of working in dynamic environments. My career objective is to attain a position of as an Intern Frontend developer, where I can challenge myself and improve my skills along with supporting the development of the organization.</p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default About2