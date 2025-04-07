import React from 'react'
import NavBarBtn from './NavBarBtn'
import { GoArrowUpRight } from 'react-icons/go'
import { motion } from 'motion/react'

function LastPage() {
    return (
        <div className='px-10 py-4 mt-10 bg-zinc-950 rounded-3xl'>
            {/* top head */}
            <div className='py-5 px-3 sm:px-28 flex md:justify-end'>
                <motion.div
                initial={{y:10,opacity:0}}
                whileInView={{y:0,opacity:1}}
                transition={{duration:0.5}}
                className='flex flex-col md:flex-row gap-3 md:gap-10'>
                    <NavBarBtn name="linkedin" link="https://www.linkedin.com/in/adarsh-dhanware" />
                    <NavBarBtn name="twitter" link="https://x.com/adarsh_dhanware?t=mwx43zVGwu-ms8kHpu-gJA&s=08" />
                    <NavBarBtn name="github" link="https://github.com/AdarshDhanware/" />
                </motion.div>
            </div>

            {/* mid part */}
            <div className='mt-16 md:mt-28 flex flex-col items-center'>
                <h1 className='text-5xl md:text-6xl lg:text-8xl text-center'>Interested in <br /> <span className='bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent italic px-1'>working</span> together? </h1>
                <motion.div
                initial={{y:20,opacity:0}}
                whileInView={{y:0,opacity:1}}
                transition={{duration:0.5,delay:0.3,ease:"easeOut"}} 
                className='mt-18'>
                    <button className='text-md flex items-center uppercase hover:border-white border border-gray-600 text-gray-300 px-3 md:px-5 py-2 rounded-full transition-all duration-300 hover:underline'
                    onClick={()=>window.open("https://www.linkedin.com/in/adarsh-dhanware")}
                    > let's talk <GoArrowUpRight size={24} /> </button>
                </motion.div>
            </div>

            {/* bottom part */}
            <motion.div
            initial={{y:10,opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{duration:0.5}}
             className='mt-28 gap-5 flex items-center flex-col-reverse md:flex-row justify-between text-lg'>
                <h2>©2025-All Rights Reserved.</h2>
                <h2>Available for freelance work.</h2>
            </motion.div>
        </div>
    )
}

export default LastPage