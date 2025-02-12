import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import Popup from "./Popup";

const RotatingTurkishKnot = () => {
  const knotRef = useRef();

  useFrame(() => {
    if (knotRef.current) {
      knotRef.current.rotation.x += 0.01;
      knotRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={knotRef} position={[0, 0, 0]}>
      <torusKnotGeometry args={[1, 0.4, 100, 16]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
};

const RotatingStar = ({ position }) => {
  const starRef = useRef();

  useFrame(() => {
    if (starRef.current) {
      starRef.current.rotation.x += 0.01;
      starRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={starRef} position={position}>
      <icosahedronGeometry args={[0.75, 0]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
};

const About = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePopupOpen = () => {
    setIsPopupOpen(true);
    console.log("hello 1")
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
    console.log("world 1")
  };

  return (
    <div className="relative flex flex-col md:flex-row justify-center items-center h-screen bg-gradient-to-r from-gray-500 via-gray-900 to-black px-6 md:px-16 overflow-hidden">
      {/* Background Grid */}
      <div className="grid"></div>

      {/* 3D Scene */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full relative">
        <Canvas className="absolute inset-0 z-0 md:hidden">
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />

          {/* Floating Objects */}
          <RotatingStar position={[-3, 0, 0]} />
          <RotatingStar position={[0, 0, 0]} />
          <RotatingStar position={[3, 0, 0]} />
        </Canvas>

        <Canvas className="absolute inset-0 z-0 hidden md:block">
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />

          {/* Floating Objects */}
          <RotatingTurkishKnot />
        </Canvas>
      </div>

      <motion.div
        initial={{ opacity: 0.3, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="relative z-10 w-full md:w-1/2 max-w-2xl text-white text-center md:text-left glass p-8 mb-5"
      >
        <h2 className="text-5xl font-extrabold mb-6">About Me</h2>
        <p className="text-lg mb-4">
          I'm <span className="font-bold">Varad Patil</span>, a passionate web developer with a knack for creating intuitive and dynamic user experiences.
          I enjoy working on diverse projects that challenge my skills and allow me to grow as a developer.
        </p>
        <motion.button
          onClick={handlePopupOpen}
          className="button-futuristic-2 mt-8"
          whileHover={{ scale: 1 }}
          whileTap={{ scale: 0.75 }}
        >
          <span>More Details</span>
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {isPopupOpen && <Popup onClose={handlePopupClose} />}
      </AnimatePresence>
    </div>
  );
};

export default About;