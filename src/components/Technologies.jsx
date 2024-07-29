import React from 'react'
import { IoLogoReact } from "react-icons/io5";
import { BiLogoJava } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { animate, motion } from "framer-motion"

const iconAnimation = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-4xl'
      >
        Technologies
      </motion.h2>
      <div className="flex flex-wrap items-center justify-center gap-4">

        <motion.div
          variants={iconAnimation(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-cyan-400 p-4">
          <FaHtml5 className='text-7xl text-cyan-400' />
        </motion.div>

        <motion.div
          variants={iconAnimation(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-cyan-400 p-4">
          <BiLogoJava className='text-7xl text-cyan-400' />
        </motion.div>

        <motion.div
          variants={iconAnimation(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-cyan-400 p-4">
          <SiMongodb className='text-7xl text-cyan-400' />
        </motion.div>

        <motion.div
          variants={iconAnimation(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-cyan-400 p-4">
          <FaNode className='text-7xl text-cyan-400' />
        </motion.div>

        <motion.div
          variants={iconAnimation(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-cyan-400 p-4">
          <FaCss3Alt className='text-7xl text-cyan-400' />
        </motion.div>

        <motion.div
          variants={iconAnimation(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-cyan-400 p-4">
          <IoLogoReact className='text-7xl text-cyan-400' />
        </motion.div>

      </div>
    </div>
  )
}

export default Technologies