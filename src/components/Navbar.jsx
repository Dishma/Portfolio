import React from 'react'
import logo from '../assets/logo.png'
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';


const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img className='mx-2 w-12' src={logo} alt="logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/dishma-bhashitha-9548b4244/"><FaLinkedin/></a>
            <a href="https://github.com/Dishma"><FaGithub/></a>
            <a href="https://www.facebook.com/dishma.bhashitha"><FaFacebook/></a>
        </div>
    </nav>
  );
};

export default Navbar