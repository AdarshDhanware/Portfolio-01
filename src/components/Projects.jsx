import React, { useState } from 'react'
import ProjectComponent from './ProjectComponent'
import todo from "../assets/videos/todo.mp4"
import curreny from "../assets/videos/currency_tracker.mp4"
import locomotive from "../assets/videos/locomotive.mp4"
import landingPage from "../assets/videos/sherry_js.mp4"


function Projects() {
  const items = [
    {
      name: "To-Do List App",
      summary: "This is a React.js-based To-Do List application that utilizes Context API for state management and Tailwind CSS for styling. The app includes a theme-changing feature that allows users to toggle between dark and light modes.",
      src: "https://github.com/AdarshDhanware/Todo-List-Using-Context-API",
      tech: ["React.js", "Tailwind CSS", "Javascript", "Context API"],
      project:todo
    },
    {
      name: "Currency Tracker",
      summary: "The Currency Tracker is a React.js-based frontend application that fetches real-time exchange rates using an API. It provides users with an easy-to-use interface to track and compare different currencies.",
      src: "https://github.com/AdarshDhanware/Context-API---Currency-Tracker",
      tech: ["React.js", "Tailwind CSS", "API Fetching", "Context API"],
      project:curreny
    },
    {
      name: "Landing Page - Locomotive.js",
      summary: "This is an animated landing page built using HTML, CSS, JavaScript, and Locomotive.js. It features smooth scrolling and interactive animations for an engaging user experience.",
      src: "https://github.com/AdarshDhanware/Landing-Page---Locomotive",
      tech: ["HTML", "CSS", "Javascript", "Locomotive.js"],
      project:locomotive
    },
    {
      name: "Animated Landing Page",
      summary: "This is an animated landing page built using HTML, CSS, JavaScript, and jQuery. It features smooth animations and an interactive design to create an engaging user experience.",
      src: "https://github.com/AdarshDhanware/Animated-Landing-Page",
      tech: ["HTML", "CSS", "Javascript", "Sherry js"],
      project:landingPage
    }
  ]

  return (
    <div className='px-3 md:px-20 py-14 mt-10 bg-zinc-950 rounded-3xl'>
      <span className='text-4xl md:text-7xl px-10 italic bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text uppercase '>Projects</span>
      <div className='flex flex-col gap-10 px-3 mt-14'>
        {items.map((key, index) => <ProjectComponent key={index} name={key.name} summary={key.summary} src={key.src} tech={key.tech} project={key.project} />)}
      </div>
    </div>
  )
}

export default Projects