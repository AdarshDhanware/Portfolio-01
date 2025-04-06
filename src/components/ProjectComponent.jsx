import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "motion/react";

function ProjectComponent({ name, summary, src, tech }) {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
      className="md:px-5 px-2 py-3 md:py-5 border rounded-2xl group transition-all duration-500 overflow-hidden">
      <div className="flex justify-between items-center px-4 md:px-10">
        <h1 className="text-2xl md:text-5xl">{name}</h1>
        <button
          onClick={() => window.open(src, "_blank")}
          className="text-md md:flex hidden items-center  uppercase border-2 px-5 py-2 rounded-full transition-all duration-300 hover:underline"
        >
          Link <GoArrowUpRight size={24} />
        </button>
      </div>

      <div className="max-w-6xl max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-screen group-hover:opacity-100">
        <div className="px-5 md:px-10 mt-2">
          <p className="text-sm md:text-xl">{summary}</p>
        </div>

        <button
          onClick={() => window.open(src, "_blank")}
          className="text-md md:hidden flex items-center uppercase border-2 ml-5 px-5 py-1 my-3 rounded-full transition-all duration-300 hover:underline"
        >
          Link <GoArrowUpRight size={24} />
        </button>

        <span className="transition-all duration-500 mt-3 md:px-10 px-5 text-md sm:text-xl md:text-3xl hover:bg-gradient-to-bl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text italic">
          Technologies used -
        </span>
        <div className="px-5 md:px-10 mt-1 flex flex-col text-sm sm:text-md md:text-xl ">
          {tech.map((key, index) => (
            <span key={index}>{key}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectComponent;
