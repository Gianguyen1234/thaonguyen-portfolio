'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';


export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Hero Section */}
      <section className="text-center py-20 px-6 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
            <Image
              src="/ninja.png"  // Ensure this URL is correct
              alt="Funny Avatar"
              fill
              style={{ objectFit: 'cover', opacity: 1 }}  // Use inline style for objectFit
              className="opacity-50"
            />
        </div>

        {/* Text Overlay */}
        <div className="relative">
          <motion.h1
            className="text-6xl md:text-7xl font-extrabold mb-6 leading-tight"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Welcome to My Portfolio
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl mb-8 mx-auto max-w-2xl"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Explore my projects and get to know how I build modern web applications with Next.js and Tailwind CSS.
          </motion.p>
          <motion.a
            href="#projects"
            className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Explore My Work
          </motion.a>
        </div>
      </section>

      {/* About Section */}
      <section className="flex flex-col md:flex-row items-center my-12 mx-4 max-w-6xl relative">
        {/* Profile Image */}
        <motion.div
          className="flex-shrink-0 w-64 h-64 mb-6 md:mb-0 relative overflow-hidden rounded-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src=""
            alt="Profile Image"
            layout="fill"
            objectFit="cover"
            className="border-4 border-blue-600 shadow-lg transform transition-transform duration-500 hover:scale-110"
          />
        </motion.div>

        {/* About Me Card */}
        <motion.div
          className="bg-gray-800 p-8 rounded-lg shadow-xl md:ml-8 flex-1 relative overflow-hidden"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4 relative">About Me</h2>
          <p className="text-lg">
            I’m a web developer with a passion for creating immersive and visually stunning web applications. With expertise in Next.js, React, and Tailwind CSS, I love crafting experiences that captivate and engage.
          </p>
        </motion.div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="bg-gray-800 p-8 rounded-lg my-12 mx-4 max-w-6xl">
        <motion.h2
          className="text-4xl font-bold mb-6 relative"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Card Example */}
          <motion.div
            className="bg-gray-700 p-6 rounded-lg shadow-xl transform hover:scale-105 transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-3">Project Title</h3>
            <p className="text-md mb-4">An engaging project showcasing advanced web technologies with a sleek and modern design.</p>
            <a href="#" className="text-blue-400 hover:underline">View Project</a>
          </motion.div>
          {/* Add more project cards here */}
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center py-12 px-4">
        <motion.h2
          className="text-4xl font-bold mb-6 relative"
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
    </main>
  );
}
