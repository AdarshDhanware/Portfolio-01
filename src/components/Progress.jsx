import React from 'react'
import { motion, useScroll } from 'framer-motion'

function Progress() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className='fixed top-0 left-0 right-0 h-1 origin-left z-50 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'
      style={{ scaleX: scrollYProgress }}
    />
  )
}

export default Progress
