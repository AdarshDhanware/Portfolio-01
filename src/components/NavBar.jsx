import React from 'react'
import NavBarBtn from './NavBarBtn'
import { GoArrowUpRight } from 'react-icons/go'
import { motion } from 'motion/react'

function NavBar() {
  return (
    <div className='py-5 w-full flex justify-between'>
      <div className='md:flex gap-10 hidden md:visible'>
        <NavBarBtn name="linkedin" link="https://www.linkedin.com/in/adarsh-dhanware" />
        <NavBarBtn name="twitter" link="https://x.com/adarsh_dhanware?t=mwx43zVGwu-ms8kHpu-gJA&s=08" />
        <NavBarBtn name="github" link="https://github.com/AdarshDhanware/" />
      </div>
      <div>
        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className='text-sm md:text-md flex items-center uppercase border border-gray-600 text-gray-300 px-3 py-1 md:px-5 md:py-2 rounded-full hover:underline hover:border-white transition-all duration-300'
          onClick={() => window.open("https://www.linkedin.com/in/adarsh-dhanware")}
        > let's talk <GoArrowUpRight size={24} /> </motion.button>
      </div>
    </div>
  )
}

export default NavBar