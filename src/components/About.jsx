import React from 'react'
import myPic from '../assets/me.png'
import { delay, motion } from "framer-motion"

const container = (delay) => ({
  hidden: {x: -100, opacity:0 },
  visible: {
    x:0,
    opacity:1,
    transition:{ duration: 0.5, delay: delay},
  },
});

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className='w-full lg:w-1/2'>
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial='hidden'
              animate='visible'
              className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>
              Dishma Bhashitha
            </motion.h1>
            <motion.span 
            variants={container(0.5)}
            initial='hidden'
            animate='visible'
            className="text-cyan-400 bg-clip-text text-3xl tracking-tight">
              Fresh Graduate at SLIIT
            </motion.span>
            <motion.p 
            variants={container(1)}
            initial='hidden'
            animate='visible'
            className='my-2 max-w-xl py-6 font-light tracking-tighter '>
              I recognize myself as a self-motivated,
              confident, hardworking individual,
              who always enthusiastic to learn and
              capable of working in dynamic
              environments. <br></br>My career objective is
              to attain a position of as an Intern, 
              where I can
              challenge myself and improve my
              skills along with supporting the
              development of the organization.
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img 
            initial={{x:100, opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:1, opacity:1.2}}
            className='rounded-2xl p-4'
            src={myPic} alt="Dishma Bhashitha"/>
          </div>
        </div>



      </div>
    </div>
  )
}
export default About