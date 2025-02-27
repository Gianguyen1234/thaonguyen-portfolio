"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import {
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaYoutube,
} from "react-icons/fa";
import { SiHashnode } from "react-icons/si";
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

  return (
    <main className="flex flex-col items-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Header Section */}
      <section className="text-center py-20 px-6 relative overflow-hidden">
        <div className="relative">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-shadow bg-gradient-to-r from-blue-500 via-cyan-600 to-blue-700 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Welcome to My Portfolio
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-8 mx-auto max-w-3xl"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Nice to meet you all.I am Thao Nguyen, a passionate developer who
            want to improve level my skils by creating dynamic web or applications.
          </motion.p>
          <motion.a
            href="/projects"
            className="mt-4 inline-block bg-gradient-to-r from-blue-500 to-green-500 text-white py-2 px-6 rounded-full shadow-lg hover:bg-gradient-to-l hover:from-green-500 hover:to-blue-500 transition duration-300 transform hover:shadow-cyan-400 font-semibold"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Explore My Projects
          </motion.a>
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center my-12 mx-4 max-w-6xl relative">
        <motion.div
          className="flex-shrink-0 w-64 h-64 mb-6 md:mb-0 relative overflow-hidden rounded-full shadow-[0_0_15px_5px_rgba(255,255,255,0.6)] transition-shadow duration-300 ease-in-out hover:shadow-[0_0_30px_15px_rgba(0,162,255,0.8)]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="https://pm1.aminoapps.com/6971/12fc2805565bbd6d1aa8a532d81b5d62c431fccdr1-681-979v2_hq.jpg"
            alt="Profile Image"
            layout="fill"
            objectFit="cover"
            className="border-4 border-blue-600 shadow-lg transform transition-transform duration-500 hover:scale-110 rounded-full"
          />
        </motion.div>

        <motion.div
          className="bg-gray-800 p-8 rounded-lg shadow-xl md:ml-8 flex-1 relative overflow-hidden"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4 relative">About Me</h2>
          <p className="text-lg">
            Well, to talk about me. I have learnt anything that relavants to the
            technology and programming to make my life better. I also create a
            youtube channel to share my experience to other people.
          </p>

          {/* Customized Button */}
          <motion.a
            href="/path/to/your-cv.pdf"
            className="mt-4 inline-block bg-gradient-to-r from-blue-500 to-green-500 text-white py-2 px-6 rounded-full shadow-lg hover:bg-gradient-to-l hover:from-green-500 hover:to-blue-500 transition duration-300 transform hover:shadow-cyan-400 font-semibold"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Download CV
          </motion.a>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="https://facebook.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#F0F0F0] text-3xl transition duration-300"
            >
              <FaFacebook />
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#F0F0F0] text-3xl transition duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Gianguyen1234"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#F0F0F0] text-3xl transition duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:nguyenluthao252@gmail.com"
              className="text-white hover:text-[#F0F0F0] text-3xl transition duration-300"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://www.youtube.com/@dev-maniac2349"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#F0F0F0] text-3xl transition duration-300"
            >
              <FaYoutube />
            </a>
            <a
              href="https://harrypage.hashnode.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#F0F0F0] text-3xl transition duration-300"
            >
              <SiHashnode />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-lg my-12 mx-4 max-w-6xl shadow-2xl">
        <motion.h2
          className="text-4xl font-bold mb-6 text-center text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-green-500 text-6xl mb-4">
              <i className="fas fa-database"></i>
            </div>
            <h3 className="text-xl font-bold mb-3 text-blue-400">MongoDB</h3>
            <p className="text-md text-gray-300">
              Expertise in NoSQL databases for building scalable,
              high-performance applications.
            </p>
          </motion.div>

          {/* ReactJS Skill Card */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-cyan-400 text-6xl mb-4">
              <i className="fab fa-react"></i>
            </div>
            <h3 className="text-xl font-bold mb-3 text-blue-400">ReactJS</h3>
            <p className="text-md text-gray-300">
              Proficient in building dynamic, component-based web applications
              with React.
            </p>
          </motion.div>

          {/* React Native Skill Card */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-purple-400 text-6xl mb-4">
              <i className="fab fa-react"></i>
            </div>
            <h3 className="text-xl font-bold mb-3 text-blue-400">
              React Native
            </h3>
            <p className="text-md text-gray-300">
              Experience in building cross-platform mobile applications using
              React Native.
            </p>
          </motion.div>

          {/* Express Framework Skill Card */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-gray-400 text-6xl mb-4">
              <i className="fas fa-server"></i>
            </div>
            <h3 className="text-xl font-bold mb-3 text-blue-400">Express.js</h3>
            <p className="text-md text-gray-300">
              Skilled in building RESTful APIs and server-side applications with
              Express.js.
            </p>
          </motion.div>
          {/* Jetpack Compose Skill Card */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-purple-400 text-6xl mb-4">
              <i className="fas fa-mobile-alt"></i>{" "}
              {/* Replace with Compose icon */}
            </div>
            <h3 className="text-xl font-bold mb-3 text-blue-400">
              Jetpack Compose
            </h3>
            <p className="text-md text-gray-300">
              Proficient in creating modern and responsive Android UIs with
              Jetpack Compose.
            </p>
          </motion.div>

          {/* Java Spring Boot Skill Card */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-blue-400 text-6xl mb-4">
              <i className="fab fa-java"></i>
            </div>
            <h3 className="text-xl font-bold mb-3 text-blue-400">
              Java Spring Boot
            </h3>
            <p className="text-md text-gray-300">
              Knowledge of building RESTful APIs and robust back-end systems
              with Spring Boot.
            </p>
          </motion.div>
          {/* JavaScript Skill Card */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-yellow-400 text-6xl mb-4">
              <i className="fab fa-js-square"></i>
            </div>
            <h3 className="text-xl font-bold mb-3 text-blue-400">JavaScript</h3>
            <p className="text-md text-gray-300">
              Proficient in ES6+, React, Node.js, and modern web development
              practices.
            </p>
          </motion.div>
          {/* Laragon Skill Card */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-teal-400 text-6xl mb-4">
              <i className="fas fa-server"></i>
            </div>
            <h3 className="text-xl font-bold mb-3 text-blue-400">Laragon</h3>
            <p className="text-md text-gray-300">
              Experienced in using Laragon for local development and server
              environment management.
            </p>
          </motion.div>

          {/* Linux (WSL) Skill Card */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-yellow-400 text-6xl mb-4">
              <i className="fab fa-linux"></i>
            </div>
            <h3 className="text-xl font-bold mb-3 text-blue-400">
              Linux (WSL)
            </h3>
            <p className="text-md text-gray-300">
              Familiar with using WSL for developing and running Linux-based
              tools in a Windows environment.
            </p>
          </motion.div>

          {/* PHP Skill Card */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-indigo-400 text-6xl mb-4">
              <i className="fab fa-php"></i>
            </div>
            <h3 className="text-xl font-bold mb-3 text-blue-400">PHP</h3>
            <p className="text-md text-gray-300">
              Experience with Laravel and building scalable, robust back-end
              systems.
            </p>
          </motion.div>

          {/* CSS & UI Design Skill Card */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-cyan-400 text-6xl mb-4">
              <i className="fas fa-paint-brush"></i>
            </div>
            <h3 className="text-xl font-bold mb-3 text-blue-400">
              CSS & UI Design
            </h3>
            <p className="text-md text-gray-300">
              Skilled in responsive design, TailwindCSS, and creating
              user-friendly interfaces.
            </p>
          </motion.div>

          {/* Python Skill Card */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-green-400 text-6xl mb-4">
              <i className="fab fa-python"></i>
            </div>
            <h3 className="text-xl font-bold mb-3 text-blue-400">Python</h3>
            <p className="text-md text-gray-300">
              Experience with data analysis, automation, and back-end
              development using Python.
            </p>
          </motion.div>

          {/* MySQL Skill Card */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-blue-400 text-6xl mb-4">
              <i className="fas fa-database"></i>
            </div>
            <h3 className="text-xl font-bold mb-3 text-blue-400">MySQL</h3>
            <p className="text-md text-gray-300">
              Proficient in designing, querying, and optimizing relational
              databases using MySQL.
            </p>
          </motion.div>

          {/* DevOps Skill Card */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-orange-400 text-6xl mb-4">
              <i className="fas fa-cogs"></i>
            </div>
            <h3 className="text-xl font-bold mb-3 text-blue-400">DevOps</h3>
            <p className="text-md text-gray-300">
              Familiar with Docker, CI/CD pipelines, and cloud infrastructure
              management.
            </p>
          </motion.div>

          {/* Git & GitHub Skill Card */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-red-400 text-6xl mb-4">
              <i className="fab fa-git-alt"></i>
            </div>
            <h3 className="text-xl font-bold mb-3 text-blue-400">
              Git & GitHub
            </h3>
            <p className="text-md text-gray-300">
              Skilled in version control, branching, and collaboration using Git
              & GitHub.
            </p>
          </motion.div>

          {/* TypeScript Skill Card */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-blue-400 text-6xl mb-4">
              <i className="fab fa-js"></i>{" "}
              {/* Icon can be replaced with a TypeScript logo */}
            </div>
            <h3 className="text-xl font-bold mb-3 text-blue-400">TypeScript</h3>
            <p className="text-md text-gray-300">
              Strong knowledge of TypeScript for creating scalable and
              maintainable applications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-800 p-8 rounded-lg my-12 mx-4 max-w-6xl testimonial-background">
        <motion.h2
          className="text-4xl font-bold mb-6 text-center text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Testimonials
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-gray-700 p-6 rounded-lg shadow-xl hover-effect"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-4">
              <Avatar name="Client A" round size="40" />
              <p className="ml-4 text-md client-quote">
                &quot;An exceptional developer with a keen eye for detail. Their
                work speaks for itself!&quot;
              </p>
            </div>
            <p className="text-right client-name">- Client A</p>
          </motion.div>

          <motion.div
            className="bg-gray-700 p-6 rounded-lg shadow-xl hover-effect"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-4">
              <Avatar name="Client B" round size="40" />
              <p className="ml-4 text-md client-quote">
                &quot;A pleasure to work with. The project was delivered on time
                and exceeded my expectations.&quot;
              </p>
            </div>
            <p className="text-right client-name">- Client B</p>
          </motion.div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScroll && (
        <motion.button
          className="fixed bottom-10 right-10 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <FaArrowUp />
        </motion.button>
      )}

      {/* Footer Section */}
      <footer className="w-full bg-gray-900 py-6 text-center">
        <p className="text-sm text-gray-500">
          © 2024 TN Portfolio | Designed by Me
        </p>
        <div className="flex justify-center mt-4">
          <a
            href="https://github.com/"
            className="text-gray-500 mx-2 hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/"
            className="text-gray-500 mx-2 hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/"
            className="text-gray-500 mx-2 hover:text-white"
          >
            Twitter
          </a>
        </div>
      </footer>
    </main>
  );
}
