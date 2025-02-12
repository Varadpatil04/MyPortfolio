import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import projectImage1 from "../assets/project1.jpg";
import projectImage2 from "../assets/project2.jpg";
import projectImage3 from "../assets/project3.jpg";
import projectImage4 from "../assets/project4.jpg";
import projectImage5 from "../assets/project5.jpg";
import projectImage6 from "../assets/project6.jpg";
import ProjectDetailsPopup from "./ProjectDetailsPopup";

const projects = [
  {
    id: 1,
    image: projectImage1,
    title: "Project 1",
    description: "Details about Project 1...",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/yourusername/project1",
  },
  {
    id: 2,
    image: projectImage2,
    title: "Project 2",
    description: "Details about Project 2...",
    tech: ["Angular", "Express", "MySQL"],
    github: "https://github.com/yourusername/project2",
  },
  {
    id: 3,
    image: projectImage3,
    title: "Project 3",
    description: "Details about Project 3...",
    tech: ["Vue", "Firebase", "Bootstrap"],
    github: "https://github.com/yourusername/project3",
  },
  {
    id: 4,
    image: projectImage4,
    title: "Project 4",
    description: "Details about Project 4...",
    tech: ["Django", "PostgreSQL", "Docker"],
    github: "https://github.com/yourusername/project4",
  },
  {
    id: 5,
    image: projectImage5,
    title: "Project 5",
    description: "Details about Project 5...",
    tech: ["Flask", "SQLite", "Heroku"],
    github: "https://github.com/yourusername/project5",
  },
  {
    id: 6,
    image: projectImage6,
    title: "Project 6",
    description: "Details about Project 6...",
    tech: ["Ruby on Rails", "Redis", "AWS"],
    github: "https://github.com/yourusername/project6",
  },
];

const ProjectsPopup = ({ onClose }) => {
  const [rotate, setRotate] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCloseClick = () => {
    setRotate(true);
    setTimeout(onClose, 500);
  };

  const handleProjectClose = () => {
    setSelectedProject(null);
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 p-4 blured">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        className="bg-gradient-to-r border-2 border-gray-300 text-gray-400 from-black to-gray-700 rounded-lg p-8 max-w-full md:max-w-6xl w-full md:w-4/5 h-full md:h-4/5 flex flex-col relative custom-scrollbar overflow-auto"
      >
        <motion.button
          onClick={handleCloseClick}
          className="absolute top-4 right-4 text-gray-200 text-2xl focus:outline-none z-20"
          animate={{ rotate: rotate ? 180 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <FaTimes />
        </motion.button>

        <h2 className="text-4xl font-bold text-white text-center mb-6">Projects</h2>

        <div className="flex flex-wrap justify-center gap-6 p-4 overflow-auto">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1,translateX:-7 }}
              whileTap={{ scale: 0.75 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg relative transition-all duration-300 hover:shadow-2xl w-full md:w-72 flex flex-col items-center border-2 border-gray-600 hover:border-white hover:bg-gradient-to-b from-black to-gray-800"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-3 w-full text-center">
                <h3 className="text-lg font-bold mb-2 text-white">{project.title}</h3>
                <button
                  className="mt-2 w-4/5 px-4 py-2 bg-gradient-to-r from-black to-gray-500 text-white font-bold rounded-lg transition-all duration-300 hover:from-gray-800 hover:to-black border-2 border-gray-300"
                  onClick={() => setSelectedProject(project)}
                >
                  Explore
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {selectedProject && (
        <ProjectDetailsPopup project={selectedProject} onClose={handleProjectClose} />
      )}
    </div>
  );
};

export default ProjectsPopup;