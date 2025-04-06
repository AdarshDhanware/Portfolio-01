import React from 'react'

function Intro() {
  return (
    <div className='px-6 md:px-20 py-20 mt-10 bg-zinc-950 rounded-3xl'>
      <div>
        <h1 className='bold uppercase text-2xl sm:text-3xl lg:text-5xl'>adarsh dhanware</h1>
        <h1 className='uppercase mt-3 md:mt-10 text-5xl lg:text-7xl xl:text-9xl'>full-stack <br /> <span className='bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text italic px-3'>mern</span> <br /> developer</h1>
        <p className='px-2 text-md mt-3 md:text-lg'>Building scalable web apps using MongoDB, Express, React, and Node.js.</p>
      </div>
    </div>
  )
}

export default Intro