"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaAngular, FaVuejs, FaNodeJs, FaLaravel, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiNuxtdotjs, SiFlutter, SiAndroid, SiIos, SiDjango, SiRubyonrails, SiMysql, SiPostgresql, SiMongodb, SiFirebase } from "react-icons/si";

const skillCategories = [
  {
    title: "Front-End",
    skills: [
      { name: "HTML", Icon: FaHtml5 },
      { name: "CSS", Icon: FaCss3Alt },
      { name: "TailwindCSS", Icon: SiTailwindcss },
      { name: "JavaScript", Icon: FaJs },
      { name: "React", Icon: FaReact },
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "Nuxt.js", Icon: SiNuxtdotjs },
      { name: "Angular", Icon: FaAngular },
      { name: "React Native", Icon: FaReact },
      { name: "Flutter", Icon: SiFlutter },
      { name: "Native Android", Icon: SiAndroid },
      { name: "Native iOS", Icon: SiIos },
      { name: "Vue.js", Icon: FaVuejs },
    ]
  },
  {
    title: "Back-End",
    skills: [
      { name: "Node.js", Icon: FaNodeJs },
      { name: "Laravel", Icon: FaLaravel },
      { name: "Django", Icon: SiDjango },
      { name: "Python", Icon: FaPython },
      { name: "Ruby on Rails", Icon: SiRubyonrails },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MySQL", Icon: SiMysql },
      { name: "PostgreSQL", Icon: SiPostgresql },
      { name: "MongoDB", Icon: SiMongodb },
      { name: "Firebase", Icon: SiFirebase },
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