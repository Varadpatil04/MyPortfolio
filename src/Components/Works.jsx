import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "react-lottie";
import animationData from "../assets/Holo-work.json"; // Replace with your Lottie animation file path
import ProjectsPopup from "./ProjectsPopup";
import BlogsPopup from "./BlogsPopup";

const Works = () => {
  const [isArrowClicked, setIsArrowClicked] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isBlogsPopupOpen, setIsBlogsPopupOpen] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const handleArrowClick = () => {
    setIsArrowClicked(!isArrowClicked);
  };

  const handlePopupOpen = () => {
    setIsPopupOpen(true);
  };
  const handleBlogsPopupOpen = () => {
    setIsBlogsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };
  const handleBlogsPopupClose = () => {
    setIsBlogsPopupOpen(false);
  };

  return (
    <div className="relative flex flex-col md:flex-row justify-evenly items-center h-screen bg-gradient-to-l from-gray-500 via-gray-900 to-black p-6 md:p-16 overflow-hidden">
      {/* Background Grid */}
      <div className="grid"></div>

      {/* Left Part - Text Block */}
      <motion.div
        initial={{ opacity: 0.3, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="relative z-10 w-full md:w-1/2 max-w-2xl text-white text-center md:text-left glass p-8 rounded-lg shadow-lg"
      >
        <h2 className="text-4xl font-extrabold mb-6">What I’ve <span className="text-gray-400">Done</span></h2>
        <p className="text-lg text-gray-200 mb-6">
          “Nothing ever comes to one, that is worth having, except as a result of hard work.” – B. T. Washington
        </p>
        <div className="flex justify-center md:justify-start space-x-10">
          <motion.button
            onClick={handlePopupOpen}
            className="button-futuristic-3 font-bold"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Projects
          </motion.button>
          <motion.button
            onClick={handleBlogsPopupOpen}
            className="button-futuristic-3 px-10 font-bold"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Blogs
            
          </motion.button>
        </div>
      </motion.div>

      {/* Right Part - Lottie Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-full  md:w-1/2  flex justify-center lottie-animation items-center"
      >
        <Lottie options={defaultOptions} height={400} width={500} />
      </motion.div>

      <AnimatePresence>
        {isPopupOpen && <ProjectsPopup onClose={handlePopupClose} />}
        {isBlogsPopupOpen && <BlogsPopup onClose={handleBlogsPopupClose} />}
      </AnimatePresence>
    </div>
  );
};

export default Works;