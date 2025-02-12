import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaTimes,FaJs,FaBootstrap, FaGithub, FaReact, FaNodeJs, FaAngular, FaVuejs, FaPython, FaDocker, FaAws ,FaHtml5,FaCss3Alt} from "react-icons/fa";
import { SiMongodb,SiCanva, SiMysql, SiFirebase, SiPostgresql,SiExpress, SiSqlite, SiRedis, SiRuby,SiTailwindcss } from "react-icons/si";

const techIcons = {
  React: <FaReact className="text-blue-500 text-2xl md:text-3xl" />,
  Html: <FaHtml5 className="text-orange-700 text-2xl md:text-3xl" />,
  Tailwind: <SiTailwindcss className="text-blue-700 text-2xl md:text-3xl" />,
  Css: <FaCss3Alt className="text-blue-400 text-2xl md:text-3xl" />,
  BootStrap: <FaBootstrap className="text-purple-500 text-2xl md:text-3xl" />,
  Canva: <SiCanva className="text-blue-600 text-2xl md:text-3xl" />,
  Express: <SiExpress className="text-white text-2xl md:text-3xl" />,
  JavaScript: <FaJs className="text-yellow-400 text-2xl md:text-3xl" />,
  "Node.js": <FaNodeJs className="text-green-500 text-2xl md:text-3xl" />,
  Angular: <FaAngular className="text-red-500 text-2xl md:text-3xl" />,
  Vue: <FaVuejs className="text-green-500 text-2xl md:text-3xl" />,
  Django: <FaPython className="text-green-500 text-2xl md:text-3xl" />,
  PostgreSQL: <SiPostgresql className="text-blue-500 text-2xl md:text-3xl" />,
  Docker: <FaDocker className="text-blue-500 text-2xl md:text-3xl" />,
  MongoDB: <SiMongodb className="text-green-500 text-2xl md:text-3xl" />,
  MySQL: <SiMysql className="text-blue-500 text-2xl md:text-3xl" />,
  Firebase: <SiFirebase className="text-yellow-500 text-2xl md:text-3xl" />,
  Flask: <FaPython className="text-black text-2xl md:text-3xl" />,
  SQLite: <SiSqlite className="text-blue-500 text-2xl md:text-3xl" />,
  Redis: <SiRedis className="text-red-500 text-2xl md:text-3xl" />,
  "Ruby on Rails": <SiRuby className="text-red-500 text-2xl md:text-3xl" />,
  AWS: <FaAws className="text-orange-500 text-2xl md:text-3xl" />,
};

const ProjectDetailsPopup = ({ project, onClose }) => {
  const [rotate, setRotate] = useState(false);

  const handleCloseClick = () => {
    setRotate(true);
    setTimeout(onClose, 500);
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 p-4 blured">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        className="bg-gradient-to-r border-2 border-gray-300 text-gray-400 from-black to-gray-700 rounded-lg p-4 md:p-8 max-w-full md:max-w-4xl w-full flex flex-col md:flex-row relative"
      >
        <motion.button
          onClick={handleCloseClick}
          className="absolute top-2 right-2 md:top-4 md:right-4 text-gray-200 text-xl md:text-2xl focus:outline-none z-20"
          animate={{ rotate: rotate ? 180 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <FaTimes />
        </motion.button>
        <div className="w-full md:w-1/2 p-2 md:p-4">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-40 md:h-full object-cover rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2 p-2 md:p-4 flex flex-col justify-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4 text-white">{project.title}</h2>
          <p className="text-sm md:text-lg text-gray-300 mb-2 md:mb-4">{project.description}</p>
          <div className="flex flex-wrap space-x-2 md:space-x-4 mb-2 md:mb-4">
            {project.tech.map((tech, index) => (
              <span key={index} className="mb-1 md:mb-2">
                {techIcons[tech]}
              </span>
            ))}
          </div>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-4 py-2 bg-gradient-to-r from-black to-gray-500 text-white font-bold rounded-lg flex items-center justify-center transition-all duration-300 hover:from-gray-800 hover:to-black border-2 border-gray-300"
          >
            <FaGithub className="mr-2" /> Get Code
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetailsPopup;