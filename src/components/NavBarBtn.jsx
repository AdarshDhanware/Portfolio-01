import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import { motion } from 'motion/react'


function NavBarBtn({ name,link}) {
  return (
    <motion.button
      initial={{ y: 20, opacity: 0 }} // Start 50px down and invisible
      animate={{ y: 0, opacity: 1 }}  // Move to original position and fade in
      transition={{ duration: 0.4, ease: "easeOut" }}
      className='text-md md:text-lg flex items-center uppercase hover:underline'
      onClick={()=> window.open(link,"_blank")}
    >
      {name} <GoArrowUpRight size={24} />
    </motion.button>
  )
}

export default NavBarBtn