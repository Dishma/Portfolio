import React from 'react'
import { EXPERIENCES } from '../constants'
import { motion } from "framer-motion"

const Experience = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className='my-20 text-center text-4xl font-light'
            >
                Experience
            </motion.h1>
            <div>
                {EXPERIENCES.map((experience, index) => (
                    <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                        <div className='w-full lg:w-1/4'>
                            <motion.p 
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                            className='mb-2 text-sm text-neutral-400'>{experience.year}</motion.p>
                        </div>
                        <div className='w-full max-w-xl lg:w-3/4'>
                            <motion.h6 
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 0.5 }}
                            className='mb-2 font-semibold'>{experience.role} - <span className='mb-2 font-semibold'>{experience.company}</span></motion.h6>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience