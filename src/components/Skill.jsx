import React from 'react'
import SkillComponent from './SkillComponent'
import { motion } from 'motion/react'

import cpp from "../assets/icons/c_plus_plus_icon.png"
import css_logo from "../assets/icons/css_icon.png"
import express from "../assets/icons/express_icon_.png"
import git from "../assets/icons/git_icon.png"
import github from "../assets/icons/github_icon_.png"
import html_icon from "../assets/icons/html_icon.png"
import java_icon from "../assets/icons/java.png"
import js_icon from "../assets/icons/js_icon.png"
import mongo from "../assets/icons/mongo_db_icon.png"
import node_icon from "../assets/icons/node_icon.png"
import postman from "../assets/icons/postman-icon.png"
import react_logo from "../assets/icons/react_icon.png"
import vs_code from "../assets/icons/vs_code_icon.png"


function Skill() {
  const dev = [
    {
      name: "html",
      logo: html_icon
    },
    {
      name: "css",
      logo: css_logo
    },
    {
      name: "javascript",
      logo: js_icon
    },
    {
      name: "react",
      logo: react_logo
    },
    {
      name: "mongo db",
      logo: mongo
    },
    {
      name: "node js",
      logo: node_icon
    },
    {
      name: "express",
      logo: express
    }
  ]

  const programming = [
    {
      name: "c++",
      logo: cpp
    },
    {
      name: "java",
      logo: java_icon
    }
  ]

  const version = [
    {
      name: "git",
      logo: git
    },
    {
      name: "github",
      logo: github
    }
  ]

  const tool = [
    {
      name: "vs code",
      logo: vs_code
    },
    {
      name: "postman",
      logo: postman
    }
  ]

  const dsa=[
    {
      name:"Strong grasp of Data Structures and Algorithms."
    },
    {
      name:"Solved 500+ problems on LeetCode with a 1550+ rating."
    },
    {
      name:"Consistently practice problem-solving and participate in coding contests."
    }
  ]

  return (
    <div className='px-3 md:px-20 py-14 mt-10 bg-zinc-950 rounded-3xl'>
      <span className='text-4xl md:text-7xl px-10 italic bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text uppercase '>skills</span>

      <div>
        <div className='flex flex-col gap-10 mt-14 px-5'>
          <SkillComponent name="development" item={dev} />
          <SkillComponent name="programming languages" item={programming} />
          <SkillComponent name="version control" item={version} />
          <SkillComponent name="data structure and algorithms" item={dsa} />
          <SkillComponent name="tools" item={tool} />
        </div>
      </div>
    </div>
  )
}

export default Skill