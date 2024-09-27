"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

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
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://pm1.aminoapps.com/6971/12fc2805565bbd6d1aa8a532d81b5d62c431fccdr1-681-979v2_hq.jpg" 
            alt="Avatar"
            width={500}
            height={500}
            quality={75}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="relative">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
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
            className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Explore My Projects
          </motion.a>
        </div>
      </section>

      {/* About Me Section */}
      <section className="flex flex-col md:flex-row items-center my-12 mx-4 max-w-6xl relative">
        <motion.div
          className="flex-shrink-0 w-64 h-64 mb-6 md:mb-0 relative overflow-hidden rounded-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="https://pm1.aminoapps.com/6971/12fc2805565bbd6d1aa8a532d81b5d62c431fccdr1-681-979v2_hq.jpg"
            alt="Profile Image"
            layout="fill"
            objectFit="cover"
            className="border-4 border-blue-600 shadow-lg transform transition-transform duration-500 hover:scale-110"
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
            I am an enthusiastic developer with a passion for building dynamic and engaging web applications. As a dedicated self-learner, I am actively developing my skills in PHP and other web technologies. This portfolio reflects my commitment to continuous learning and showcases the practical work I have done so far.
          </p>
          <motion.a
            href="/path/to/your-cv.pdf" 
            className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Download CV
          </motion.a>
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
            <p className="text-md text-gray-300 italic">&quot;An amazing developer! Delivered beyond expectations.&quot;</p>
            <h3 className="mt-4 text-blue-400 font-semibold">- Client A</h3>
          </motion.div>
          <motion.div
            className="bg-gray-700 p-6 rounded-lg shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-md text-gray-300 italic">&quot;Highly recommend for any web development project.&quot;</p>
            <h3 className="mt-4 text-blue-400 font-semibold">- Client B</h3>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="bg-gray-800 p-8 rounded-lg my-12 mx-4 max-w-6xl">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example of a project card */}
          <motion.div
            className="bg-gray-700 p-6 rounded-lg shadow-xl transform hover:scale-105 transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-bold mb-3 text-blue-400">Project Title</h3>
            <p className="text-md mb-4 text-gray-300">This project showcases my expertise in web development, featuring a modern design and intuitive functionality.</p>
            <a href="#" className="text-blue-500 hover:underline font-semibold">View Project</a>
          </motion.div>

          {/* Additional project cards */}
          <motion.div
            className="bg-gray-700 p-6 rounded-lg shadow-xl transform hover:scale-105 transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-bold mb-3 text-blue-400">Another Project</h3>
            <p className="text-md mb-4 text-gray-300">An innovative solution that integrates modern technologies to enhance user experience.</p>
            <a href="#" className="text-blue-500 hover:underline font-semibold">View Project</a>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center py-12 px-4">
        <motion.h2
          className="text-3xl font-bold mb-6 relative"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get in Touch
        </motion.h2>
        <motion.p
          className="text-lg mb-8 max-w-2xl mx-auto relative"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Ready to start a new project or just want to chat? Feel free to reach out!
        </motion.p>
        <motion.a
          href="/contact"
          className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105 relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Contact Me
        </motion.a>
      </section>

      {/* Scroll to Top Button */}
      {showScroll && (
        <motion.button
          className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition transform hover:scale-110"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <FaArrowUp />
        </motion.button>
      )}

      {/* Footer Section */}
      <footer className="w-full bg-gray-900 py-6 text-center">
        <p className="text-sm text-gray-500">© 2024 My Portfolio | Designed by Me</p>
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
