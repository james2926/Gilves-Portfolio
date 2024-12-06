"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Smartphone, Globe } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online shopping platform with real-time inventory management.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2089&q=80",
    technologies: ["Next.js", "Node.js", "MongoDB"],
    type: "web",
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Social Media App",
    description: "A mobile-first social networking application with real-time messaging.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80",
    technologies: ["React Native", "Firebase", "Node.js"],
    type: "mobile",
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Task Management System",
    description: "A comprehensive project management tool with team collaboration features.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2055&q=80",
    technologies: ["Vue.js", "Laravel", "PostgreSQL"],
    type: "web",
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Fitness Tracking App",
    description: "A mobile application for tracking workouts and nutrition with personalized recommendations.",
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80",
    technologies: ["Flutter", "Firebase", "Node.js"],
    type: "mobile",
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Food Delivery App",
    description: "A native iOS application for food ordering and delivery tracking.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80",
    technologies: ["Swift", "Firebase", "Node.js"],
    type: "mobile",
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Travel Guide App",
    description: "A native Android application for discovering and planning travel destinations.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80",
    technologies: ["Kotlin", "Firebase", "Google Maps API"],
    type: "mobile",
    liveLink: "#",
    githubLink: "#",
  },
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="max-w-2xl mx-auto">
            A selection of my recent work showcasing my expertise in web and mobile development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-900 rounded-lg overflow-hidden"
            >
              <div className="relative aspect-w-16 aspect-h-9">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-2">
                  {project.type === "mobile" ? (
                    <Smartphone className="h-5 w-5 text-blue-400" />
                  ) : (
                    <Globe className="h-5 w-5 text-blue-400" />
                  )}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl text-white font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.liveLink}
                    className="flex items-center text-gray-300 hover:text-white transition-colors"
                  >
                    <ExternalLink className="h-5 w-5 mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;