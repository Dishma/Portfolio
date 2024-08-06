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
                className="my-20 text-center text-4xl font-light"
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
                        <img className='rounded-2xl  p-4' src={myPic2} alt="Dishma Bhashitha 2" />
                    </div>

                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2"
                >

                    <div className="flex justify-center lg:justify-start font-light">
                        <p className='my-2 max-w-xl py-6'>Hey there! I'm Dishma, a passionate web developer and tech enthusiast with a knack for creating stunning and efficient web applications.
                        I specialize in information technology, leveraging technologies like HTML, CSS, JavaScript, Tailwind and React to build responsive and user-friendly interfaces.<br></br>
                        When I'm not coding, you can find me exploring the latest tech trends, working on my YouTube channel.  I'm always on the lookout for new challenges and opportunities to learn and grow.

                        <br></br><br></br><br></br>
                        <p>Let's connect and create something amazing together!</p>

                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default About2