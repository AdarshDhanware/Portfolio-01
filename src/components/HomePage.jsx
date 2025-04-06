import React from 'react'
import NavBar from './NavBar'
import { FiArrowDownCircle } from "react-icons/fi";
import { motion } from 'motion/react';

function HomePage() {
  const word = "beautiful";
  return (
    <>
      <div className='px-6 md:px-20 py-4 w-full bg-zinc-950 rounded-3xl'>
        <NavBar />

        <div className='md:mt-2 mt-10'>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            className='text-4xl sm:text-8xl lg:text-9xl'>I create <br />
            <span className='italic px-2 md:px-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text'>
              {word.split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </span> <br /> experiences.</motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
            className='mt-5 sm:text-xl lg:text-2xl'>I work with people to create experiences.</motion.p
          >
        </div>

        <div className='mt-12 md:mt-22 flex flex-col gap-10 md:flex-row justify-between items-center'>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
            className='md:text-lg'>Available for freelance work.</motion.p>
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className='flex items-center hover:underline text-sm md:text-md px-3 py-2 md:px-3 md:py-2 rounded-full gap-2 border-2 uppercase'>scroll-down <FiArrowDownCircle size={24} /> </motion.div>
        </div>
      </div>
    </>
  )
}

export default HomePage