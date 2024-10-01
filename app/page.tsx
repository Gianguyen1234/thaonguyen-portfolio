"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { FaFacebook, FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa'; // Added LinkedIn icon

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
            I am passionate about crafting dynamic web applications and continuously learning new technologies. This portfolio showcases my self-driven journey into PHP development and the projects I have been working on.
          </motion.p>
          <motion.a
            href="/projects"
            className="mt-4 inline-block bg-gradient-to-r from-blue-500 to-green-500 text-white py-2 px-6 rounded-full shadow-lg hover:bg-gradient-to-l hover:from-green-500 hover:to-blue-500 transition duration-300 transform hover:shadow-cyan-400"
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
            I am an enthusiastic developer with a passion for building dynamic and engaging web applications. 
            As a dedicated self-learner, I am actively developing my skills in PHP and other web technologies. 
            This portfolio reflects my commitment to continuous learning and showcases the practical work I have done so far.
          </p>

          {/* Customized Button */}
          <motion.a
            href="/path/to/your-cv.pdf" 
            className="mt-4 inline-block bg-gradient-to-r from-blue-500 to-green-500 text-white py-2 px-6 rounded-full shadow-lg hover:bg-gradient-to-l hover:from-green-500 hover:to-blue-500 transition duration-300 transform hover:shadow-cyan-400"
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
              href="https://github.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#F0F0F0] text-3xl transition duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:your-email@example.com"
              className="text-white hover:text-[#F0F0F0] text-3xl transition duration-300"
            >
              <FaEnvelope />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="bg-gray-800 p-8 rounded-lg my-12 mx-4 max-w-6xl">
        <motion.h2
          className="text-4xl font-bold mb-6 text-center text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <motion.div
            className="bg-gray-700 p-6 rounded-lg shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-bold mb-3 text-blue-400">JavaScript</h3>
            <p className="text-md text-gray-300">Proficient in ES6+, React, Node.js, and modern web development practices.</p>
          </motion.div>
          <motion.div
            className="bg-gray-700 p-6 rounded-lg shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-bold mb-3 text-blue-400">PHP</h3>
            <p className="text-md text-gray-300">Experience with Laravel and building scalable, robust back-end systems.</p>
          </motion.div>
          <motion.div
            className="bg-gray-700 p-6 rounded-lg shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-bold mb-3 text-blue-400">CSS & UI Design</h3>
            <p className="text-md text-gray-300">Skilled in responsive design, TailwindCSS, and creating user-friendly interfaces.</p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-800 p-8 rounded-lg my-12 mx-4 max-w-6xl">
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
            className="bg-gray-700 p-6 rounded-lg shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-md text-gray-300">
              "An exceptional developer with a keen eye for detail. Their work speaks for itself!"
            </p>
            <p className="text-right font-bold text-blue-400">- Client A</p>
          </motion.div>
          <motion.div
            className="bg-gray-700 p-6 rounded-lg shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-md text-gray-300">
              "A pleasure to work with. The project was delivered on time and exceeded my expectations."
            </p>
            <p className="text-right font-bold text-blue-400">- Client B</p>
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
        <p className="text-sm text-gray-500">© 2024 TN Portfolio | Designed by Me</p>
        <div className="flex justify-center mt-4">
          <a href="https://github.com/" className="text-gray-500 mx-2 hover:text-white">
            GitHub
          </a>
          <a href="https://www.linkedin.com/" className="text-gray-500 mx-2 hover:text-white">
            LinkedIn
          </a>
          <a href="https://twitter.com/" className="text-gray-500 mx-2 hover:text-white">
            Twitter
          </a>
        </div>
      </footer>
    </main>
  );
}
