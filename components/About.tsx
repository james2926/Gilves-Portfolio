"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-foreground mb-6">
              I am a passionate Full Stack Developer with extensive experience in building
              modern web and mobile applications. My journey in software development has
              equipped me with a deep understanding of both front-end and back-end
              technologies.
            </p>
            <p className="text-foreground mb-6">
              I specialize in creating scalable, efficient, and user-friendly applications
              that solve real-world problems. My approach combines technical expertise with
              creative problem-solving to deliver outstanding results.
            </p>
            <div className="flex space-x-4">
              {/* <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-background text-foreground px-6 py-2 rounded-full font-medium transition-colors duration-300"
              >
                Contact Me
              </motion.a> */}
              <motion.a
                href="https://docs.google.com/document/d/1iawUrEVf0UM0VU38W4V3AntAwfKRt_LXSLKe64fpPhw/export?format=pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block border px-6 py-2 rounded-full font-medium hover:bg-white hover:text-black transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                aria-label="Download CV"
                download
              >
                Download CV
              </motion.a>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80"
                alt="Developer workspace"
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;