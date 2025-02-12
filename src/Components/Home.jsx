import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaMedium, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Lottie from "lottie-react";
import hologramAnimation from "../assets/hologram2.json"; // Ensure this Lottie file is in your assets folder

const Home = () => {
  return (
    <div className="relative flex flex-col md:flex-row justify-center items-center h-screen bg-gradient-to-r from-black to-gray-900 px-6 md:px-16">
      {/* Background Grid */}
      <div className="grid"></div>

      {/* Background Bubbles */}
      <div className="bubbles">
        {Array(10).fill().map((_, i) => (
          <div key={i} className="bubble"></div>
        ))}
      </div>

      {/* Left Section: Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center md:text-left w-full md:w-1/2 space-y-4 pt-10 md:pt-0"
      >
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl font-extrabold text-gray-300 drop-shadow-lg"
        >
          Hi, I'm <span className="text-gray-200 font-serif">Varad Patil</span>
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0.5, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-2xl font-semibold text-gray-400"
        >
          <TypeAnimation
            sequence={[
              "A Web Developer", 2000,
              "A Blog Writer", 2000,
              "A Front-End Developer", 2000,
              "A Back-End Developer", 2000,
              "A Java Developer", 2000
            ]}
            wrapper="p"
            speed={60}
            repeat={Infinity}
          />
        </motion.h2>
        <motion.p
          initial={{ opacity: 0.5, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg text-gray-400"
        >
          Passionate developer and blog writer crafting user-focused solutions.
          Blending code, design, and storytelling to create impactful experiences.
        </motion.p>
        <motion.div
          initial={{ opacity: 0.5, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <button
            className="button-futuristic mt-4"
            onClick={() => window.open("https://forms.visme.co/formsPlayer/y4r7wg9j-contact-form", "_blank")}
          >
            <span>Connect</span>
          </button>

        </motion.div>
      </motion.div>

      {/* Right Section: Lottie Holographic Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="relative z-10 w-full md:w-1/2 flex justify-center hidden md:flex"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, ease: "easeOut", }}
          className="w-2/3 md:w-full max-w-xs md:max-w-md bubble-effect-container"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.75 }}
        >
          <div className="bubbles">
            {Array(10).fill().map((_, i) => (
              <div key={i} className="bubble"></div>
            ))}
          </div>
          <Lottie
            animationData={hologramAnimation}
            loop={true}
            className="pointer-events-none md:pointer-events-auto"
          />
        </motion.div>
      </motion.div>

      {/* Social Links */}
      <motion.div className="absolute bottom-10 px-4 left-10 flex space-x-6">
        {[
          { icon: FaLinkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/varad-patil-2226a52b7/" },
          { icon: FaGithub, label: "GitHub", url: "https://github.com/Varadpatil04" },
          { icon: FaMedium, label: "Medium", url: "https://medium.com/@varadpatil" },
          { icon: FaInstagram, label: "Instagram", url: "https://www.instagram.com/varad_patil0401/" }
        ].map(({ icon: Icon, label, url }, index) => (
          <motion.a
            key={index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.05, ease: "easeInOut" }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.75 }}
            className="relative text-gray-400 hover:text-white transition duration-300 group"
          >
            <Icon size={30} />
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 mt-1 text-sm text-white p-1 rounded">
              {label}
            </span>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default Home;