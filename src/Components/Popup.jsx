import React from "react";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import animationData from "../assets/Hello.json"; // Replace with your Lottie animation file path

const Popup = ({ onClose }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className="fixed inset-0 blured flex justify-center items-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        className="bg-gradient-to-r border-2 border-gray-300 text-gray-400 from-black to-gray-700 rounded-lg p-6 max-w-7xl w-full flex flex-col md:flex-row"
      >
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-3xl font-bold mb-8">About <span className="text-gray-200">me!!</span></h2>
          <div className="flex flex-wrap">
            <div className="detail-item w-full sm:w-1/2 mb-2">
              <p><strong className="text-gray-200">Name:</strong> Varad Rajendra Patil</p>
              <div className="line-design" />
            </div>
            <div className="detail-item w-full sm:w-1/2 mb-2">
              <p><strong className="text-gray-200">Birthdate:</strong> January 4, 2003</p>
              <div className="line-design" />
            </div>
            <div className="detail-item w-full sm:w-1/2 mb-2">
              <p><strong className="text-gray-200">Email:</strong> varadpatil4103@gmail.com</p>
              <div className="line-design" />
            </div>
            <div className="detail-item w-full sm:w-1/2 mb-2">
              <p><strong className="text-gray-200">Contact No:</strong> +91 12345 67890</p>
              <div className="line-design" />
            </div>
            <div className="detail-item w-full sm:w-1/2 mb-2">
              <p><strong className="text-gray-200">Education:</strong> B.Tech Computer Science</p>
              <div className="line-design" />
            </div>
            <div className="detail-item w-full sm:w-1/2 mb-2">
              <p><strong className="text-gray-200">Company:</strong> TCS</p>
              <div className="line-design" />
            </div>
            <div className="detail-item w-full sm:w-1/2 mb-2">
              <p><strong className="text-gray-200">Role:</strong> System Engineer</p>
              <div className="line-design" />
            </div>
            <div className="detail-item w-full sm:w-1/2 mb-2">
              <p><strong className="text-gray-200">City:</strong> Pune, India</p>
              <div className="line-design" />
            </div>
          </div>
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

export default Popup;