import React from 'react'
import { IoLogoReact } from "react-icons/io5";
import { BiLogoJava } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { motion } from "framer-motion"

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <h2 className='my-20 text-center text-4xl'>Technologies</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-cyan-400 p-4">
            <FaHtml5 className='text-7xl text-cyan-400' />
            </div>
            <div className="rounded-2xl border-4 border-cyan-400 p-4">
            <BiLogoJava className='text-7xl text-cyan-400' />
            </div>
            <div className="rounded-2xl border-4 border-cyan-400 p-4">
            <SiMongodb className='text-7xl text-cyan-400' />
            </div>
            <div className="rounded-2xl border-4 border-cyan-400 p-4">
            <FaNode className='text-7xl text-cyan-400' />
            </div>
            <div className="rounded-2xl border-4 border-cyan-400 p-4">
            <FaCss3Alt className='text-7xl text-cyan-400' />
            </div>
            <div className="rounded-2xl border-4 border-cyan-400 p-4">
            <IoLogoReact className='text-7xl text-cyan-400' />
            </div>
        </div>
    </div>
  )
}

export default Technologies