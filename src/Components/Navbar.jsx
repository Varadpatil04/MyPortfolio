import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const location = useLocation();
  const [active, setActive] = useState(location.pathname === "/" ? "home" : location.pathname.substring(1));

  // Handle Scroll Effect for Transparent Navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setActive(location.pathname === "/" ? "home" : location.pathname.substring(1));
  }, [location]);

  const handleClick = (section) => {
    setActive(section);
    setIsOpen(false); // Close menu on mobile after clicking a link
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 py-4 transition-all duration-300 ${scrolling ? "bg-transparent" : "bg-transparent"
        }`}
    >
      <div className="max-w-8xl mx-auto px-16 py-5 flex justify-between items-center">
        {/* Animated Logo */}
        <motion.h1
          className="text-white text-2xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }} // Slower fade-in
        >
          <a href="/" className="">My Portfolio</a>
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-400 text-lg">
          {["home", "about", "works", "skills"].map(
            (section, index) => (
              <motion.li
                key={section}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.3, ease: "easeInOut" }} // Slower, staggered effect
              >
                <Link
                  to={`/${section}`}
                  onClick={() => handleClick(section)}
                  className={`relative transition-all duration-300 ${active === section
                      ? "text-white drop-shadow-[0_0_10px_#3b82f6]"
                      : "hover:text-white"
                    }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                  {active === section && (
                    <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-white animate-pulse"></span>
                  )}
                </Link>
              </motion.li>
            )
          )}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl relative z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="transition-all"
          >
            {isOpen ? <FaTimes className="text-white" /> : <FaBars className="text-white" />}
          </motion.div>
        </button>
      </div>

      {/* Mobile Menu with Smooth Transition */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -50 }}
        transition={{ duration: 0.5, ease: "easeInOut" }} // Slower fade-in effect
        className={`md:hidden absolute top-0 left-0 w-full h-screen bg-black/70 backdrop-blur-lg flex flex-col justify-center items-center space-y-6 text-gray-200 transition-all ${isOpen ? "scale-100 opacity-100" : "scale-90 opacity-0 pointer-events-none"
          }`}
      >
        {["home", "about", "works", "skills"].map(
          (section, index) => (
            <motion.div
  key={section}
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.3 * index, ease: "easeInOut" }} // Slow fade-in for mobile menu
>
  <Link
    to={`/${section}`}
    onClick={() => handleClick(section)}
    className={`text-xl transition-all duration-300 ${
      active === section ? "text-white drop-shadow-[0_0_10px_#3b82f6]" : "hover:text-white"
    }`}
  >
    {section.charAt(0).toUpperCase() + section.slice(1)}
  </Link>
</motion.div>
          )
        )}
      </motion.div>
    </nav>
  );
};

export default Navbar;