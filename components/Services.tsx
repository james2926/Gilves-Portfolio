"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code, Smartphone, Bug } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Website Development",
    description:
      "Creating responsive and modern websites using the latest technologies and best practices.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Building cross-platform mobile applications with React Native, Flutter, and native development.",
  },
  {
    icon: Bug,
    title: "Bug Fixing",
    description:
      "Identifying and resolving software issues to ensure smooth application performance.",
  },
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="services" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Services</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Providing comprehensive solutions for your digital needs with expertise
            in multiple domains.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-900 rounded-lg p-8 hover:bg-gray-800 transition-colors duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-500/10 p-4 rounded-full mb-6">
                  <service.icon className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;