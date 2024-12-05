"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black/50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl font-bold mb-6"
          >
            Hi, I am Gilves Gonzales
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
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
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 bg-blue-500 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
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