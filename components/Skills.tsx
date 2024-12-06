"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Code,
  FileCode,
  Palette,
  Globe,
  Smartphone,
  Database,
  Server,
  Laptop,
  Flame,
  AppWindow,
  MonitorSmartphone,
  Phone,
  BrainCircuit
} from "lucide-react";

const skillCategories = [
  {
    title: "Front-End",
    skills: [
      { name: "HTML", Icon: FileCode },
      { name: "CSS", Icon: Palette },
      { name: "TailwindCSS", Icon: FileCode },
      { name: "JavaScript", Icon: Code },
      { name: "React", Icon: Code },
      { name: "Next.js", Icon: Globe },
      { name: "Nuxt.js", Icon: Globe },
      { name: "Angular", Icon: BrainCircuit },
      { name: "React Native", Icon: Smartphone },
      { name: "Flutter", Icon: MonitorSmartphone },
      { name: "Native Android", Icon: Phone },
      { name: "Native iOS", Icon: AppWindow },
      { name: "Vue.js", Icon: Code },
    ],
  },
  {
    title: "Back-End",
    skills: [
      { name: "Node.js", Icon: Server },
      { name: "Laravel", Icon: Code },
      { name: "Django", Icon: Code },
      { name: "Ruby on Rails", Icon: Code },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MySQL", Icon: Database },
      { name: "PostgreSQL", Icon: Database },
      { name: "MongoDB", Icon: Database },
      { name: "Firebase", Icon: Flame },
    ],
  },
];

const Skills = () => {
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
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
          <p className="max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiencies
            across different domains.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="border rounded-lg p-8"
            >
              <h3 className="text-xl font-semibold mb-6 text-center">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => {
                  const IconComponent = skill.Icon;
                  return (
                    <motion.span
                      key={skillIndex}
                      whileHover={{ scale: 1.05 }}
                      className="bg-blue-500/30 text-blue-400 px-4 py-2 rounded-full text-sm flex items-center gap-2"
                    >
                      <IconComponent className="h-4 w-4" />
                      {skill.name}
                    </motion.span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;