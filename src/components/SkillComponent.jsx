import React from 'react'
import { motion } from 'motion/react'

function SkillComponent({ name, item }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className='md:px-5 px-2 py-3 md:py-5 border border-gray-600 text-gray-300 rounded-xl group'> {/* Add group here */}
        <h1 className='uppercase text-lg md:text-5xl px-2 md:px-10'>{name}</h1>
        <div className='px-3 md:px-10 max-h-0 overflow-hidden opacity-0 transition-all duration-600 group-hover:max-h-72 group-hover:opacity-100'>
          <ul className='mt-2 md:mt-5 uppercase text-sm md:text-xl px-1 flex flex-col gap-2'>
            {item && item.map((key, index) => (
              <li key={index} className='gap-x-2 items-center flex'>
                {key.name}
                <div className='w-6 h-6 overflow-hidden'><img src={key.logo} /></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default SkillComponent
