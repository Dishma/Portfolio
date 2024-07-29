import React from 'react'
import { CONTACT } from '../constants'
import { motion } from "framer-motion"

const Contact = () => {
  return (
    <div

      className='border-b border-neutral-900 pb-20'>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl">Get in Touch</motion.h1>

      <div class=" flex justify-center items-center">
        <div class="relative inline-flex  group">
          <div
            class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-400 rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt ">
          </div>
          <a href="/assets/cv.pdf" download title="Download my CV"
            class="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            role="button">Download my Resume
          </a>
        </div>
      </div>

      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href="mailto:bdishma@gmail.com" className='border-b'>{CONTACT.email}</a>
      </div>
    </div>
  )
}

export default Contact