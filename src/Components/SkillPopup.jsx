import React from "react";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import { BsFiletypeJson } from "react-icons/bs";
import { FaCogs,FaHtml5, FaCss3Alt, FaReact, FaJs, FaBootstrap, FaJava, FaNodeJs, FaDatabase, FaGitAlt, FaGithub, FaLinux, FaPython, FaCloud } from "react-icons/fa";
import { SiJquery,SiTailwindcss,SiSpring, SiSpringboot, SiExpress, SiMongodb, SiPostman, SiMysql,SiCanva,SiVite, SiNpm, SiDocker } from "react-icons/si";
import animationData from "../assets/mobile2.json"; // Replace with your Lottie animation file path

const frontendSkills = [
    { title: "HTML", icon: FaHtml5, color: "#E34F26" },
    { title: "CSS", icon: FaCss3Alt, color: "#1572B6" },
    { title: "JavaScript", icon: FaJs, color: "#F7DF1E" },
    { title: "React", icon: FaReact, color: "#61DAFB" },
  { title: "Vite", icon: SiVite, color: "#646CFF" }, 
  { title: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
  { title: "Tailwind", icon: SiTailwindcss, color: "#38B2AC" },
  { title: "jQuery", icon: SiJquery, color: "#0769AD" }
];

const backendSkills = [
    { title: "Java", icon: FaJava, color: "#f99820" },
  { title: "Spring", icon: SiSpring, color: "#6DB33F" },
  { title: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
  { title: "Python", icon: FaPython, color: "#ADFF2F" },
  { title: "Node.js", icon: FaNodeJs, color: "#339933" },
  { title: "Express.js", icon: SiExpress, color: "#000000" },
  { title: "Cloud", icon: FaCloud, color: "#00ADEF" },
  { title: "Microservice", icon: FaCogs, color: "#FFFFF4" } // Using cloud icon as a placeholder for microservice
];

const databaseSkills = [
    { title: "SQL", icon: SiMysql, color: "#00758F" },
  { title: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { title: "DBMS", icon: FaDatabase, color: "#4DB33D" },
  { title: "RestAPI", icon: FaDatabase, color: "#F48700" }
];

const toolsSkills = [
    { title: "Git", icon: FaGitAlt, color: "#F05032" },
    { title: "GitHub", icon: FaGithub, color: "#BF77F6" },
    { title: "Linux", icon: FaLinux, color: "#FCC624" },
    { title: "Canva", icon: SiCanva, color: "#00C4CC" }, // Canva doesn't have an official icon, using a placeholder
    { title: "Postman", icon: SiPostman, color: "#FF6C37" },
    { title: "JSON", icon: BsFiletypeJson, color: "#fff" },
  { title: "NPM", icon: SiNpm, color: "#CB3837" },
  { title: "Docker", icon: SiDocker, color: "#2496ED" }
];

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const SkillsPopup = ({ onClose, skill }) => {
  const getSkills = (category) => {
    switch (category) {
      case "Frontend":
        return frontendSkills;
      case "Backend":
        return backendSkills;
      case "Database":
        return databaseSkills;
      case "Tools":
        return toolsSkills;
      default:
        return [];
    }
  };

  return (
    <div className="fixed inset-0 blured flex justify-center items-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8  }}
        transition={{ duration: 0.3 }}
        className="bg-gradient-to-r border-2 border-gray-300 text-gray-400 from-black to-gray-700 rounded-lg p-6 max-w-7xl w-full flex flex-col md:flex-row"
      >
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-3xl font-bold mb-8"><span className="text-gray-200">{skill.category}</span></h2>
          <p className="text-gray-200 mb-4">{skill.description}</p>
          {skill.category && (
            <div className="flex flex-wrap -mx-2">
              {getSkills(skill.category).map((skillItem, index) => (
                <div key={index} className="skill-card flex items-center p-2 bg-gray-800 rounded-lg shadow-md text-white m-2" style={{ width: '30%' }}>
                  <skillItem.icon className="text-2xl mr-2" style={{ color: skillItem.color }} />
                  <span className="text-sm">{skillItem.title}</span>
                </div>
              ))}
            </div>
          )}
          <motion.button
            onClick={onClose}
            className="button-futuristic-2 mt-8 w-full md:w-1/3 sm:w-auto"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Close</span>
          </motion.button>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center px-4 mobile">
          <Lottie options={defaultOptions} height={300} width={350} />
        </div>
      </motion.div>
    </div>
  );
};

export default SkillsPopup;