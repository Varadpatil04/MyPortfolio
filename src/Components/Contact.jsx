import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="relative flex flex-col md:flex-row justify-evenly items-center h-screen bg-gradient-to-l from-gray-500 via-gray-900 to-black p-6 md:p-16 overflow-hidden">
      {/* Background Grid */}
      <div className="grid"></div>

      {/* Left Part - Form */}
      <motion.div
        initial={{ opacity: 0.3, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="relative z-10 w-full md:w-1/2 max-w-2xl text-white glass p-8 rounded-lg shadow-lg"
      >
        <h2 className="text-4xl font-extrabold mb-6">Get in <span className="text-gray-400">Touch</span></h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-200 mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 text-gray-900 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label className="block text-gray-200 mb-2" htmlFor="mobile">Mobile No</label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              className="w-full px-4 py-2 text-gray-900 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label className="block text-gray-200 mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 text-gray-900 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label className="block text-gray-200 mb-2" htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full px-4 py-2 text-gray-900 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <button
              type="submit"
              className="button-futuristic-3 font-bold w-full"
            >
              Send Message
            </button>
          </div>
        </form>
      </motion.div>

      {/* Right Part - Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 flex justify-center items-center"
      >
        <img src='../assets/blog1.png' alt="Contact" className="rounded-lg shadow-lg" /> {/* Replace with your image path */}
      </motion.div>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 w-full p-4 bg-gray-800 text-white text-center">
        <p>Phone: (Your Mobile Number)</p>
        <p>Email: (Your Email)</p>
        <p>Made by Your Name</p>
      </footer>
    </div>
  );
};

export default Contact;