"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaHome, 
  FaUser, 
  FaBriefcase, 
  FaEnvelope, 
  FaCode,
  FaGithub,
  FaYoutube,
  FaCoffee
} from "react-icons/fa";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { SiHashnode } from "react-icons/si";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Home", path: "/", icon: <FaHome className="text-lg" /> },
    { name: "About", path: "/about", icon: <FaUser className="text-lg" /> },
    { name: "Projects", path: "/projects", icon: <FaBriefcase className="text-lg" /> },
    { name: "Contact", path: "/contact", icon: <FaEnvelope className="text-lg" /> },
  ];

  const socialLinks = [
    { icon: <FaCoffee />, url: "https://buymeacoffee.com/holy_dev" },
    { icon: <FaGithub />, url: "https://github.com/Gianguyen1234" },
    { icon: <FaYoutube />, url: "https://www.youtube.com/@dev-maniac2349" },
    { icon: <SiHashnode />, url: "https://harrypage.hashnode.dev/" }
  ];

  return (
    <>
      {/* Main Navigation */}
      <motion.nav 
        className={`fixed w-full p-4 text-white z-50 transition-all duration-300 ${
          scrolled ? "bg-gray-900/90 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo/Brand */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold flex items-center"
          >
            <Link href="/" className="flex items-center group">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center mr-3 group-hover:rotate-12 transition-transform duration-300">
                <FaCode className="text-white text-lg" />
              </div>
              <span className="text-white group-hover:text-cyan-300 transition-colors duration-300">
                Thao Nguyen
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation with Icons */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.path}>
                <motion.div
                  className="relative px-3 py-2 group flex items-center"
                  whileHover={{ y: -2 }}
                >
                  <span className="text-cyan-400 mr-2 group-hover:text-white transition-colors duration-300">
                    {link.icon}
                  </span>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    {link.name}
                  </span>
                  <motion.span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                  />
                </motion.div>
              </Link>
            ))}

            {/* Social Links - Desktop */}
            <div className="flex items-center space-x-4 ml-6 border-l border-gray-700 pl-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 text-xl transition-colors duration-300"
                  whileHover={{ y: -3 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none p-2"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? (
                <RiCloseLine className="text-2xl" />
              ) : (
                <RiMenu3Line className="text-2xl" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden bg-gray-900/95 backdrop-blur-lg w-full absolute left-0 px-4 pb-4 shadow-xl"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-4 pt-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link href={link.path} onClick={() => setIsOpen(false)}>
                      <div className="flex items-center px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300">
                        <span className="text-cyan-400 mr-3">{link.icon}</span>
                        <span className="text-white">{link.name}</span>
                      </div>
                    </Link>
                  </motion.div>
                ))}

                {/* Social Links - Mobile */}
                <div className="flex justify-center space-x-6 pt-4 border-t border-gray-700 mt-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-cyan-400 text-2xl transition-colors duration-300"
                      whileHover={{ scale: 1.2 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Bottom Navigation for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900/90 backdrop-blur-md border-t border-gray-700 p-2 md:hidden flex justify-around z-40">
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            href={link.path}
            className="flex flex-col items-center text-gray-300 hover:text-cyan-400 transition-colors duration-300"
          >
            <motion.div 
              whileTap={{ scale: 0.9 }}
              className="p-2"
            >
              {link.icon}
            </motion.div>
            <span className="text-xs mt-1">{link.name}</span>
          </Link>
        ))}
      </div>
    </>
  );
}