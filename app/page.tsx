"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaYoutube,
  FaCode,
  FaMobileAlt,
  FaServer,
  FaDatabase,
  FaTerminal,
  FaExternalLinkAlt,
  FaShieldAlt,
  FaBook,
  FaGlobe,
  FaHistory,
  FaCoffee
} from "react-icons/fa";
import {
  SiHashnode,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
import { SiPhp, SiFastapi, SiSpring } from "react-icons/si";
import { FaLock, FaTachometerAlt } from "react-icons/fa";
import { DiNodejs, DiReact } from "react-icons/di";
import Avatar from "react-avatar";

export default function Home() {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (window.pageYOffset > 300) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Skill categories
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        {
          name: "React",
          icon: <DiReact className="text-cyan-400" />,
          level: 90,
        },
        {
          name: "Next.js",
          icon: <SiNextdotjs className="text-white" />,
          level: 85,
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="text-blue-500" />,
          level: 80,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-cyan-300" />,
          level: 85,
        },
        {
          name: "React Native",
          icon: <FaMobileAlt className="text-blue-400" />,
          level: 75,
        },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        {
          name: "PHP & Laravel",
          icon: <SiPhp className="text-indigo-400" />,
          level: 85,
          description:
            "Experienced in building robust web applications with Laravel framework, including RESTful APIs, authentication systems, and database management.",
        },
        {
          name: "FastAPI",
          icon: <SiFastapi className="text-teal-400" />,
          level: 80,
          description:
            "Skilled in creating high-performance APIs with Python's FastAPI, implementing async endpoints, data validation, and OpenAPI documentation.",
        },
        {
          name: "Node.js & Express",
          icon: <DiNodejs className="text-green-500" />,
          level: 75,
          description:
            "Proficient in building scalable server-side applications with Express.js, middleware integration, and REST API development.",
        },
        {
          name: "Spring Boot",
          icon: <SiSpring className="text-green-600" />,
          level: 70,
          description:
            "Knowledge of Java Spring Boot for enterprise-grade applications, dependency injection, and building secure backend services.",
        },
        {
          name: "API Design",
          icon: <FaCode className="text-blue-400" />,
          level: 80,
          description:
            "Strong understanding of REST principles, GraphQL, authentication (JWT, OAuth), rate limiting, and API documentation.",
        },
        {
          name: "Microservices",
          icon: <FaServer className="text-purple-400" />,
          level: 70,
          description:
            "Experience with designing and implementing microservices architecture, service communication, and containerization.",
        },
        {
          name: "Authentication",
          icon: <FaLock className="text-red-400" />,
          level: 80,
          description:
            "Implemented various auth systems including JWT, OAuth 2.0, session-based auth, and role-based access control.",
        },
        {
          name: "Performance Optimization",
          icon: <FaTachometerAlt className="text-orange-400" />,
          level: 75,
          description:
            "Experience in query optimization, caching strategies (Redis), and load testing to ensure high-performance backend systems.",
        },
      ],
    },
    {
      title: "Database & DevOps",
      skills: [
        {
          name: "MongoDB",
          icon: <FaDatabase className="text-green-500" />,
          level: 80,
        },
        {
          name: "MySQL",
          icon: <FaDatabase className="text-blue-400" />,
          level: 75,
        },
        {
          name: "Docker",
          icon: <FaTerminal className="text-blue-300" />,
          level: 70,
        },
        {
          name: "Git/GitHub",
          icon: <FaGithub className="text-white" />,
          level: 85,
        },
      ],
    },
  ];

  return (
    <main className="flex flex-col items-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Header Section */}
      <section className="text-center py-20 px-6 relative overflow-hidden w-full max-w-7xl">
        <div className="relative">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Thao Nguyen
          </motion.h1>
          <motion.h2
            className="text-2xl md:text-3xl font-semibold mb-6 text-cyan-200"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Full Stack Developer & Content Creator
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl mb-8 mx-auto max-w-3xl text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            I build scalable web and mobile applications with 3 years of
            hands-on experience. Passionate about creating efficient solutions
            and sharing knowledge through my YouTube channel and blog.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 px-8 rounded-full shadow-lg hover:bg-gradient-to-l hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 hover:shadow-cyan-400/50 font-semibold text-lg"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-block border-2 border-cyan-400 text-cyan-400 py-3 px-8 rounded-full shadow-lg hover:bg-cyan-400/10 transition-all duration-300 font-semibold text-lg"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="flex flex-col md:flex-row items-center my-12 mx-4 max-w-6xl w-full relative">
        <motion.div
          className="flex-shrink-0 w-64 h-64 md:w-72 md:h-72 mb-8 md:mb-0 relative overflow-hidden rounded-xl shadow-lg border-4 border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-500"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="https://pm1.aminoapps.com/6971/12fc2805565bbd6d1aa8a532d81b5d62c431fccdr1-681-979v2_hq.jpg" // Replace with your professional image
            alt="Thao Nguyen - Full Stack Developer"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 hover:scale-105"
          />
        </motion.div>

        <motion.div
          className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl shadow-xl md:ml-12 flex-1 relative overflow-hidden border border-gray-700 hover:border-cyan-400/30 transition-all duration-500"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-cyan-400">About Me</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              As a self-taught developer with 3 years of experience, I have
              mastered the art of turning ideas into functional applications. My
              journey has equipped me with a unique perspective on
              problem-solving and efficient learning.
            </p>
            <p>
              I primarily use Laravel and PHP to develop web applications, but I
              also enjoy building Android apps with Jetpack Compose in my free
              time.
            </p>
            <p>
              Through my YouTube channel and Hashnode blog, I share my learning
              experiences to help others in their development journey.
            </p>
          </div>

          {/* Social Media Icons & Buy Me a Coffee */}
          <div className="flex flex-col items-center mt-8">
            <div className="flex justify-center space-x-4 mb-4">
              {[
                {
                  icon: <FaGithub />,
                  url: "https://github.com/Gianguyen1234",
                  color: "hover:text-gray-300",
                },
                {
                  icon: <FaYoutube />,
                  url: "https://www.youtube.com/@dev-maniac2349",
                  color: "hover:text-red-500",
                },
                {
                  icon: <SiHashnode />,
                  url: "https://harrypage.hashnode.dev/",
                  color: "hover:text-blue-300",
                },
                {
                  icon: <FaEnvelope />,
                  url: "mailto:nguyenluthao252@gmail.com",
                  color: "hover:text-cyan-400",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-2xl text-gray-400 ${social.color} transition-colors duration-300`}
                  whileHover={{ y: -3 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            
            {/* Buy Me a Coffee Button */}
            <motion.a
              href="https://buymeacoffee.com/holy_dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-yellow-500/30 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaCoffee className="mr-2" />
              Buy Me a Coffee
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="w-full max-w-6xl px-4 my-16">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            Technical Skills
          </span>
        </motion.h2>

        <div className="space-y-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700"
            >
              <h3 className="text-2xl font-semibold mb-6 text-cyan-400 flex items-center">
                <span className="w-2 h-8 bg-cyan-500 mr-3 rounded-full"></span>
                {category.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    whileHover={{ y: -5 }}
                    className="bg-gray-900/50 p-4 rounded-lg border border-gray-700 hover:border-cyan-400/30 transition-all duration-300"
                  >
                    <div className="flex items-center mb-3">
                      <div className="text-3xl mr-3">{skill.icon}</div>
                      <h4 className="text-lg font-medium">{skill.name}</h4>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div
                        className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2.5 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Open Source Projects Section */}
      <section className="w-full max-w-6xl px-4 my-16">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            My Open Source Projects
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 gap-8">
          {/* Project 1 - Open English VN */}
          <motion.div
            className="bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-cyan-400/30 transition-all duration-500 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="md:flex">
              <div className="md:w-1/2 h-64 md:h-auto bg-gray-900 relative">
                <iframe
                  src="https://gianguyen1234.github.io/open-english-vn/resources/"
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                  title="Open English VN Preview"
                ></iframe>
              </div>
              <div className="p-6 md:w-1/2">
                <div className="flex items-center mb-4">
                  <FaBook className="text-2xl text-cyan-400 mr-3" />
                  <h3 className="text-2xl font-semibold">Open English VN</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  A curated collection of English learning resources
                  specifically designed for Vietnamese learners, organized by
                  skill level and learning objectives.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                    Education
                  </span>
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                    Vietnamese
                  </span>
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                    Resource Collection
                  </span>
                </div>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/Gianguyen1234/open-english-vn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center"
                  >
                    <FaGithub className="mr-2" /> Source Code
                  </a>
                  <a
                    href="https://gianguyen1234.github.io/open-english-vn/resources/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-300 flex items-center"
                  >
                    <FaExternalLinkAlt className="mr-2" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project 2 - Tor Information Section */}
          <motion.div
            className="bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-cyan-400/30 transition-all duration-500 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="md:flex flex-row-reverse">
              <div className="md:w-1/2 h-64 md:h-auto bg-gray-900 relative">
                <iframe
                  src="https://gianguyen1234.github.io/A-section-to-know-about-Tor/"
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                  title="Tor Information Preview"
                ></iframe>
              </div>
              <div className="p-6 md:w-1/2">
                <div className="flex items-center mb-4">
                  <FaLock className="text-2xl text-blue-400 mr-3" />
                  <h3 className="text-2xl font-semibold">Tor Network Guide</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  An educational resource explaining the Tor network, its
                  benefits for privacy, and how to use it safely and
                  effectively.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                    Privacy
                  </span>
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                    Security
                  </span>
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                    Education
                  </span>
                </div>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/Gianguyen1234/A-section-to-know-about-Tor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center"
                  >
                    <FaGithub className="mr-2" /> Source Code
                  </a>
                  <a
                    href="https://gianguyen1234.github.io/A-section-to-know-about-Tor/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-300 flex items-center"
                  >
                    <FaExternalLinkAlt className="mr-2" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project 3 - Global Browser Directory */}
          <motion.div
            className="bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-cyan-400/30 transition-all duration-500 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="md:flex">
              <div className="md:w-1/2 h-64 md:h-auto bg-gray-900 relative">
                <iframe
                  src="https://gianguyen1234.github.io/A-collected-of-browsers-around-the-world/"
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                  title="Browser Directory Preview"
                ></iframe>
              </div>
              <div className="p-6 md:w-1/2">
                <div className="flex items-center mb-4">
                  <FaGlobe className="text-2xl text-green-400 mr-3" />
                  <h3 className="text-2xl font-semibold">
                    Global Browser Directory
                  </h3>
                </div>
                <p className="text-gray-300 mb-4">
                  A comprehensive collection of web browsers from around the
                  world, featuring both mainstream and lesser-known options with
                  their key features.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                    Browsers
                  </span>
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                    Web
                  </span>
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                    Directory
                  </span>
                </div>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/Gianguyen1234/A-collected-of-browsers-around-the-world"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center"
                  >
                    <FaGithub className="mr-2" /> Source Code
                  </a>
                  <a
                    href="https://gianguyen1234.github.io/A-collected-of-browsers-around-the-world/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-300 flex items-center"
                  >
                    <FaExternalLinkAlt className="mr-2" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project 4 - Session Hijacking */}
          <motion.div
            className="bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-cyan-400/30 transition-all duration-500 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="md:flex flex-row-reverse">
              <div className="md:w-1/2 h-64 md:h-auto bg-gray-900 relative">
                <iframe
                  src="https://gianguyen1234.github.io/how-session-hijacking-works-animation/"
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                  title="Session Hijacking Preview"
                ></iframe>
              </div>
              <div className="p-6 md:w-1/2">
                <div className="flex items-center mb-4">
                  <FaShieldAlt className="text-2xl text-red-400 mr-3" />
                  <h3 className="text-2xl font-semibold">
                    Session Hijacking Demo
                  </h3>
                </div>
                <p className="text-gray-300 mb-4">
                  An interactive Vietnamese-language demonstration explaining
                  session hijacking attacks, how they work, and methods to
                  prevent them.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                    Security
                  </span>
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                    Vietnamese
                  </span>
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                    Education
                  </span>
                </div>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/Gianguyen1234/how-session-hijacking-works-animation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center"
                  >
                    <FaGithub className="mr-2" /> Source Code
                  </a>
                  <a
                    href="https://gianguyen1234.github.io/how-session-hijacking-works-animation/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-300 flex items-center"
                  >
                    <FaExternalLinkAlt className="mr-2" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* YouTube Videos Section */}
      <section className="w-full max-w-6xl px-4 my-16">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            My Youtube Videos
          </span>
        </motion.h2>

        {/* Programming Legends Stories */}
        <div className="mb-16">
          <motion.h3
            className="text-3xl font-bold mb-8 text-cyan-400 flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FaHistory className="mr-3" />
            Programming Legends Stories
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Video 1 - John Drapper */}
            <motion.div
              className="bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-cyan-400/30 transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="aspect-w-16 aspect-h-9 w-full">
                <iframe
                  className="w-full h-64"
                  src="https://www.youtube.com/embed/0Kjp1sCyMsk"
                  title="John Drapper - Captain Crunch"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  John Drapper - Captain Crunch
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  Huyền thoại hacker bắt đầu từ... một món đồ chơi
                </p>
                <div className="flex">
                  <span className="px-2 py-1 bg-gray-700 rounded-full text-xs mr-2">
                    Hacker
                  </span>
                  <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">
                    History
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Video 2 - Paul Le Roux */}
            <motion.div
              className="bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-cyan-400/30 transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="aspect-w-16 aspect-h-9 w-full">
                <iframe
                  className="w-full h-64"
                  src="https://www.youtube.com/embed/5e8aSPLxCCs"
                  title="Paul Le Roux"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Paul Le Roux</h3>
                <p className="text-gray-400 text-sm mb-3">
                  Từ lập trình viên mã hóa đến trùm tội phạm quốc tế
                </p>
                <div className="flex">
                  <span className="px-2 py-1 bg-gray-700 rounded-full text-xs mr-2">
                    Crime
                  </span>
                  <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">
                    Programming
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Video 3 - Aaron Swartz */}
            <motion.div
              className="bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-cyan-400/30 transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="aspect-w-16 aspect-h-9 w-full">
                <iframe
                  className="w-full h-64"
                  src="https://www.youtube.com/embed/xwMKLL0uMdI"
                  title="Aaron Swartz"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Aaron Swartz</h3>
                <p className="text-gray-400 text-sm mb-3">
                  Thiên tài Internet và bi kịch pháp lý
                </p>
                <div className="flex">
                  <span className="px-2 py-1 bg-gray-700 rounded-full text-xs mr-2">
                    Internet
                  </span>
                  <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">
                    Biography
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Programming Tutorials */}
        <div>
          <motion.h3
            className="text-3xl font-bold mb-8 text-cyan-400 flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <FaCode className="mr-3" />
            Programming Tutorials & Concepts
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Video 1 - REST API */}
            <motion.div
              className="bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-cyan-400/30 transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="aspect-w-16 aspect-h-9 w-full">
                <iframe
                  className="w-full h-64"
                  src="https://www.youtube.com/embed/tezdcb2dwps"
                  title="How REST API Works"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  How REST API Works
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  Simple Explanation with Animation
                </p>
                <div className="flex">
                  <span className="px-2 py-1 bg-gray-700 rounded-full text-xs mr-2">
                    API
                  </span>
                  <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">
                    Web
                  </span>
                  <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">
                    Animation
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Video 2 - Gemini API */}
            <motion.div
              className="bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-cyan-400/30 transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="aspect-w-16 aspect-h-9 w-full">
                <iframe
                  className="w-full h-64"
                  src="https://www.youtube.com/embed/PCmL_I-oXI0"
                  title="Gemini API Integration"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  Gemini API Integration
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  Android Studio Build.Gradle Tutorial
                </p>
                <div className="flex">
                  <span className="px-2 py-1 bg-gray-700 rounded-full text-xs mr-2">
                    Android
                  </span>
                  <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">
                    API
                  </span>
                  <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">
                    Tutorial
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Video 3 - SQL Injection */}
            <motion.div
              className="bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-cyan-400/30 transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="aspect-w-16 aspect-h-9 w-full">
                <iframe
                  className="w-full h-64"
                  src="https://www.youtube.com/embed/oaWLbgPUKUg"
                  title="SQL Injection Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  SQL Injection Attack
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  How Hackers Bypass Logins
                </p>
                <div className="flex">
                  <span className="px-2 py-1 bg-gray-700 rounded-full text-xs mr-2">
                    Security
                  </span>
                  <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">
                    Hacking
                  </span>
                  <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">
                    Animation
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.youtube.com/@dev-maniac2349"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-lg border border-cyan-400/50 hover:border-cyan-400/80 rounded-full px-6 py-3"
          >
            <FaYoutube className="mr-3 text-xl" />
            Explore More Videos on My Channel
          </a>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full max-w-6xl px-4 my-16">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            Client Testimonials
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              name: "Alex Johnson",
              role: "CEO, TechStart Inc.",
              content:
                "Thao delivered our e-commerce platform ahead of schedule with exceptional attention to detail. Her React skills transformed our complex requirements into a seamless user experience that increased our conversion rate by 30%.",
              avatar: "AJ",
            },
            {
              name: "Sarah Miller",
              role: "Product Manager, MobileFirst",
              content:
                "Working with Thao on our React Native app was a game-changer. She not only implemented the features perfectly but also suggested performance optimizations that reduced our app load time by 40%.",
              avatar: "SM",
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-cyan-400/30 transition-all duration-500"
            >
              <div className="flex items-start mb-4">
                <Avatar
                  name={testimonial.avatar}
                  round
                  size="50"
                  className="flex-shrink-0"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-cyan-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                &quot;{testimonial.content}&quot;
              </p>
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="w-full max-w-4xl px-4 my-16 py-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700"
      >
        <motion.h2
          className="text-4xl font-bold mb-8 text-center text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            Get In Touch
          </span>
        </motion.h2>

        <motion.form
          className="space-y-6 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400"
                placeholder="your.email@example.com"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400"
              placeholder="What's this about?"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400"
              placeholder="Your message here..."
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 px-8 rounded-full shadow-lg hover:bg-gradient-to-l hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 hover:shadow-cyan-400/50 font-semibold text-lg"
            >
              Send Message
            </button>
          </div>
        </motion.form>
      </section>

      {/* Scroll to Top Button */}
      {showScroll && (
        <motion.button
          className="fixed bottom-8 right-8 bg-gradient-to-br from-blue-500 to-cyan-500 text-white p-4 rounded-full shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 z-50"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <FaArrowUp className="text-xl" />
        </motion.button>
      )}

      {/* Footer Section */}
      <footer className="w-full bg-gray-900/80 backdrop-blur-sm py-8 mt-12 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-cyan-400">Thao Nguyen</h3>
              <p className="text-gray-400 mt-1">Full Stack Developer</p>
            </div>
            <div className="flex space-x-6">
              <a
                href="https://github.com/Gianguyen1234"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a
                href="https://www.youtube.com/@dev-maniac2349"
                className="text-gray-400 hover:text-red-500 transition-colors duration-300"
              >
                <FaYoutube className="text-2xl" />
              </a>
              <a
                href="mailto:nguyenluthao252@gmail.com"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                <FaEnvelope className="text-2xl" />
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-6 pt-6 text-center text-gray-500 text-sm">
            <p>
              © {new Date().getFullYear()} Thao Nguyen. All rights reserved.
            </p>
            <p className="mt-2">
              Built with Next.js, Tailwind CSS, and Framer Motion
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
