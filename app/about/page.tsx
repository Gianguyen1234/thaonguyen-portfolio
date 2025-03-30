"use client";

import { motion } from "framer-motion";
import { FaBlog, FaBook, FaPencilAlt, FaCode, FaLaptopCode, FaServer, FaMobileAlt } from "react-icons/fa";
import { SiPhp, SiLaravel,SiReact, SiNextdotjs, SiNodedotjs, SiTypescript } from "react-icons/si";

const learningJourney = [
  {
    year: "2022",
    milestones: [
      "Started learning programming fundamentals",
      "HTML/CSS/JavaScript basics",
      "First WordPress projects"
    ],
    icon: <FaCode className="text-blue-400" />
  },
  {
    year: "2023",
    milestones: [
      "Dived into PHP & MySQL",
      "Built first Laravel applications",
      "Began learning React"
    ],
    icon: <FaLaptopCode className="text-green-400" />
  },
  {
    year: "2024",
    milestones: [
      "Advanced Laravel development",
      "Explored React Native for mobile",
      "Started with TypeScript"
    ],
    icon: <FaMobileAlt className="text-purple-400" />
  },
  {
    year: "2025",
    milestones: [
      "Full-stack projects with Next.js",
      "API development with Node.js",
      "Open source contributions"
    ],
    icon: <FaServer className="text-cyan-400" />
  }
];

const skills = [
  { name: "PHP", icon: <SiPhp className="text-purple-500" />, level: 85 },
  { name: "Laravel", icon: <SiLaravel className="text-red-500" />, level: 80 },
  { name: "React", icon: <SiReact className="text-blue-400" />, level: 75 },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" />, level: 70 },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" />, level: 70 },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-500" />, level: 65 }
];

export default function About() {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4 sm:p-8"
    >
      <div className="max-w-6xl w-full bg-gray-800/50 backdrop-blur-md rounded-xl shadow-2xl p-6 sm:p-10 border border-gray-700">
        {/* Header Section */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            My Learning Journey
          </h1>
          <p className="text-lg text-gray-400">2022 - Present • Self-Taught Developer</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            {/* Timeline */}
            <motion.div 
              className="mb-12"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <FaCode className="mr-3 text-blue-400" /> My Progress
              </h2>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-5 h-full w-0.5 bg-gradient-to-b from-cyan-500 to-blue-600"></div>
                
                {learningJourney.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="relative pl-16 pb-8"
                  >
                    <div className="absolute left-0 flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.year}</h3>
                    <ul className="space-y-2">
                      {item.milestones.map((milestone, i) => (
                        <motion.li 
                          key={i}
                          whileHover={{ x: 5 }}
                          className="flex items-start text-gray-300"
                        >
                          <span className="mr-2 text-cyan-400">▹</span>
                          {milestone}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Current Focus */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <FaLaptopCode className="mr-3 text-green-400" /> Current Focus
              </h2>
              <p className="text-gray-300 mb-4">
                In 2025, I&#39;m deepening my expertise in:
              </p>
              <ul className="grid grid-cols-2 gap-2">
                <motion.li whileHover={{ scale: 1.05 }} className="flex items-center bg-gray-700/50 p-3 rounded-lg">
                  <SiNextdotjs className="text-white mr-2" /> Next.js
                </motion.li>
                <motion.li whileHover={{ scale: 1.05 }} className="flex items-center bg-gray-700/50 p-3 rounded-lg">
                  <SiTypescript className="text-blue-600 mr-2" /> TypeScript
                </motion.li>
                <motion.li whileHover={{ scale: 1.05 }} className="flex items-center bg-gray-700/50 p-3 rounded-lg">
                  <SiNodedotjs className="text-green-500 mr-2" /> Node.js
                </motion.li>
                <motion.li whileHover={{ scale: 1.05 }} className="flex items-center bg-gray-700/50 p-3 rounded-lg">
                  <SiReact className="text-blue-400 mr-2" /> React Native
                </motion.li>
              </ul>
            </motion.div>
          </div>

          {/* Right Column */}
          <div>
            {/* Skills */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <FaCode className="mr-3 text-purple-400" /> Technical Skills
              </h2>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <motion.div 
                    key={skill.name}
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-700/30 p-4 rounded-lg border border-gray-600"
                  >
                    <div className="flex items-center mb-2">
                      <span className="text-xl mr-3">{skill.icon}</span>
                      <span className="font-medium text-white">{skill.name}</span>
                      <span className="ml-auto text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Blogs */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <FaBlog className="mr-3 text-blue-400" /> My Blogs
              </h2>
              <div className="space-y-4">
                <motion.a
                  whileHover={{ x: 5 }}
                  href="https://kafkablog.kesug.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-gray-700/30 rounded-lg border border-gray-600 hover:border-blue-400 transition-colors"
                >
                  <div className="flex items-center">
                    <FaBook className="text-yellow-400 mr-3" />
                    <span className="text-white">KafkaBlog: For language learners and tech enthusiasts</span>
                  </div>
                </motion.a>
                <motion.a
                  whileHover={{ x: 5 }}
                  href="https://harrypage.hashnode.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-gray-700/30 rounded-lg border border-gray-600 hover:border-blue-400 transition-colors"
                >
                  <div className="flex items-center">
                    <FaPencilAlt className="text-cyan-400 mr-3" />
                    <span className="text-white">Hashnode: My technical blog on web development</span>
                  </div>
                </motion.a>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-center"
            >
              <a
                href="mailto:nguyenluthao252@gmail.com"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
              >
                Get in Touch
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.main>
  );
}