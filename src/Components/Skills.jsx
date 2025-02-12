import React, { useState } from "react";
import Lottie from "react-lottie";
import { motion } from "framer-motion";
import { FaHtml5, FaJava, FaDatabase, FaGitAlt } from "react-icons/fa";
import frontendAnimation from "../assets/frontend.json";
import backendAnimation from "../assets/backend.json";
import databaseAnimation from "../assets/database.json";
import toolsAnimation from "../assets/tools.json";
import lottieAnimation from "../assets/mobile.json"; // Add your Lottie animation for mobile and desktop here
import SkillPopup from "./SkillPopup"; // Import the SkillPopup component

const skillsData = [
  { category: "Frontend", lottie: frontendAnimation, description: "Building responsive and interactive user interfaces.", icon: FaHtml5, color: "#E34F26" },
  { category: "Backend", lottie: backendAnimation, description: "Creating robust and scalable server-side applications.", icon: FaJava, color: "#007396" },
  { category: "Database", lottie: databaseAnimation, description: "Managing data storage and retrieval with efficiency.", icon: FaDatabase, color: "#4DB33D" },
  { category: "Tools", lottie: toolsAnimation, description: "Utilizing tools to enhance development workflow.", icon: FaGitAlt, color: "#F05032" }
];

const defaultOptions = {
  loop: true,
  autoplay: true,
  rendererSettings: { preserveAspectRatio: "xMidYMid slice" }
};

const containerVariants = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.5 } } };
const itemVariants = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 2.0 } } };

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <div className="relative flex flex-col md:flex-row justify-center items-center h-screen bg-gradient-to-r from-gray-500 via-gray-900 to-black px-3 md:px-16 overflow-hidden">
      <div className="grid"></div>
      
      {/* Lottie Animation for Desktop */}
      <div className="hidden md:flex w-1/3 h-full relative flex-shrink-0 justify-center items-center">
        <Lottie options={{ ...defaultOptions, animationData: lottieAnimation }} height={400} width={400} />
      </div>

      {/* Lottie Animation for Mobile */}
      <div className="flex md:hidden w-full justify-center items-center gap-4 py-6">
        <Lottie options={{ ...defaultOptions, animationData: lottieAnimation }} height={200} width={200} />
      </div>

      {/* Right Section: Skill Cards */}
      <div className="relative z-10 w-full md:w-2/3 max-w-4xl text-white text-center md:text-left p-4 md:p-8 flex flex-wrap justify-center md:justify-start">
        <motion.div className="skills-container flex flex-wrap justify-center gap-4 md:gap-6" variants={containerVariants} initial="hidden" animate="show">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.category}
              variants={itemVariants}
              className={`skill-card flex items-center justify-center w-[48%] md:w-[48%] bg-gray-800 p-2 md:p-4 rounded-lg shadow-md border-2 border-gray-400 hover:border-white ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              onClick={() => setSelectedSkill(skill)}
            >
              <div className="hidden md:block">
                <Lottie options={{ ...defaultOptions, animationData: skill.lottie }} height={100} width={120} className={` ${index % 2 === 0 ? 'mr-6' : 'ml-6'}`} />
              </div>
              <div className={`${index % 2 === 0 ? 'text-right md:block hidden' : 'text-left md:block hidden'} w-full`}>
                <h3 className="text-xl font-bold mb-2 md:block hidden">{skill.category}</h3>
                <p className="md:block hidden">{skill.description}</p>
              </div>
              <div className="md:hidden text-left flex items-center justify-start w-full text-lg font-bold text-white">
                <skill.icon className="mr-4 text-left text-3xl" style={{ color: skill.color }} />
                {skill.category}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* SkillPopup */}
      {selectedSkill && <SkillPopup onClose={() => setSelectedSkill(null)} skill={selectedSkill} />}
    </div>
  );
};

export default Skills;