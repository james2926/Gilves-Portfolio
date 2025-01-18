"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);

  useEffect(() => {
    // Update the dimensions when the component mounts
    setScreenWidth(window.innerWidth);
    setScreenHeight(window.innerHeight);

    // Optional: Update dimensions on window resize
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black/50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl font-bold mb-6"
          >
            Hi, I am John Baker
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl mb-8 max-w-2xl mx-auto"
          >
            Crafting innovative digital solutions with cutting-edge technologies
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center space-x-4"
          >
            <a
              href="#contact"
              className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors duration-300 flex items-center"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#projects"
              className="border border-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-black transition-colors duration-300"
            >
              View Projects
            </a>
          </motion.div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {screenWidth > 0 &&
          screenHeight > 0 &&
          [...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-2 w-2 bg-blue-500 rounded-full"
              initial={{
                x: Math.random() * screenWidth,
                y: Math.random() * screenHeight,
                scale: 0,
              }}
              animate={{
                x: Math.random() * screenWidth,
                y: Math.random() * screenHeight,
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
              style={{
                opacity: 0.3,
              }}
            />
          ))}
      </div>
    </section>
  );
};

export default Hero;
