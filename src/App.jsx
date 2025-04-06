import { useState } from 'react'
import HomePage from './components/HomePage'
import LastPage from './components/LastPage'
import Intro from './components/Intro'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Skill from './components/Skill'
import Progress from './components/Progress'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-black p-5 md:p-10 overflow-hidden w-screen h-full text-white'>
      <Progress/>
      <HomePage />
      <Intro />
      <Skill />
      <Projects />
      <Contact />
      <LastPage />
    </div>

  )
}

export default App
