import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMedium, FaTimes } from "react-icons/fa";
import blogImage1 from "../assets/blog1.png";
import blogImage2 from "../assets/blog2.png";
import blogImage3 from "../assets/blog3.png";
import blogImage4 from "../assets/blog4.png";
import blogImage5 from "../assets/blog5.png";
import blogImage6 from "../assets/blog6.png";
// import BlogDetailsPopup from "./BlogDetailsPopup";

const blogs = [
  {
    id: 1,
    image: blogImage1,
    title: "Streams",
    description: "What is a Stream in Java?",
    link: "https://varadpatil.medium.com/streams-the-ultimate-powerhouse-aed376e59191",
  },
  {
    id: 2,
    image: blogImage2,
    title: "Spring Security",
    description: "Details about Blog 2...",
    link: "https://varadpatil.medium.com/spring-security-comprehensive-overview-e59f30dcd0ee",
  },
  {
    id: 3,
    image: blogImage3,
    title: "Deployment Strategies",
    description: "Details about Blog 3...",
    link: "https://varadpatil.medium.com/zero-downtime-and-beyond-exploring-modern-deployment-strategies-f0f457562baf",
  },
  {
    id: 4,
    image: blogImage4,
    title: "Spring - Spring Boot",
    description: "Details about Blog 4...",
    link: "https://varadpatil.medium.com/basics-for-beginner-to-learn-spring-spring-boot-b27443669d7d",
  },
  {
    id: 5,
    image: blogImage5,
    title: "OAuth 2.0 in Spring Boot",
    description: "Details about Blog 5...",
    link: "https://varadpatil.medium.com/implementing-google-and-github-login-with-oauth-2-0-in-spring-boot-1f8fb3c29c8f",
  },
  {
    id: 6,
    image: blogImage6,
    title: "Git & GitHub",
    description: "Details about Blog 6...",
    link: "https://varadpatil.medium.com/starting-simple-with-git-github-a-beginners-guide-fbb113129f06",
  },
];

const BlogsPopup = ({ onClose }) => {
  const [rotate, setRotate] = useState(false);
//   const [selectedBlog, setSelectedBlog] = useState(null);

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

        <h2 className="text-4xl font-bold text-white text-center mb-6">Blogs</h2>

        <div className="flex flex-wrap justify-center gap-6 p-4 overflow-auto">
          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              whileHover={{ scale: 1 }}
              whileTap={{ scale: 0.75 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg relative transition-all duration-300 hover:shadow-2xl w-full md:w-72 flex flex-col items-center border-2 border-gray-600 hover:border-white hover:bg-gradient-to-b from-black to-gray-800"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-5 w-full text-center">
                <h3 className="text-lg font-bold mb-4 text-white">{blog.title}</h3>
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                   className="mt-4 px-4 py-2 bg-gradient-to-r from-black to-gray-500 text-white font-bold rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-black hover:to-black border-2 border-gray-300 "
                >
                <FaMedium className="mr-2" /> Read More
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>


    </div>
  );
};

export default BlogsPopup;