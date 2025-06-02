"use client";

import { useState, useRef, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt, FaFacebook, FaLaptopCode, FaCoffee, FaMusic  } from "react-icons/fa";
import { motion, AnimatePresence, useInView } from "framer-motion";

const openSourceProjects = [
  {
    title: "Open English VN",
    description: "A curated collection of English learning resources for Vietnamese learners",
    githubLink: "https://github.com/Gianguyen1234/open-english-vn",
    demoLink: "https://gianguyen1234.github.io/open-english-vn/resources/",
    technologies: ["Astro", "Tailwind CSS", "JavaScript"],
    previewAnimation: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: 0.1 }
    }
  },
  {
    title: "Tor Network Guide",
    description: "Educational resource about the Tor network and online privacy",
    githubLink: "https://github.com/Gianguyen1234/A-section-to-know-about-Tor",
    demoLink: "https://gianguyen1234.github.io/A-section-to-know-about-Tor/",
    technologies: ["HTML", "CSS", "JavaScript"],
    previewAnimation: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: 0.2 }
    }
  },
  {
    title: "Global Browser Directory",
    description: "Collection of web browsers from around the world",
    githubLink: "https://github.com/Gianguyen1234/A-collected-of-browsers-around-the-world",
    demoLink: "https://gianguyen1234.github.io/A-collected-of-browsers-around-the-world/",
    technologies: ["HTML", "CSS", "JavaScript"],
    previewAnimation: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: 0.3 }
    }
  },
  {
    title: "Session Hijacking Demo",
    description: "Interactive demonstration of session hijacking attacks (Vietnamese)",
    githubLink: "https://github.com/Gianguyen1234/how-session-hijacking-works-animation",
    demoLink: "https://gianguyen1234.github.io/how-session-hijacking-works-animation/",
    technologies: ["HTML", "CSS", "JavaScript", "Animation"],
    previewAnimation: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: 0.4 }
    }
  }
];

const CodingEnjoymentAnimation = () => {
  const [activeIcon, setActiveIcon] = useState(0);
  const icons = [
    { icon: <FaLaptopCode className="text-4xl" />, color: "text-blue-400" },
    { icon: <FaCoffee className="text-4xl" />, color: "text-amber-500" },
    { icon: <FaMusic className="text-4xl" />, color: "text-purple-400" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIcon((prev) => (prev + 1) % icons.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-40 w-full flex items-center justify-center">
      <motion.div
        className="absolute"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        transition={{ duration: 0.5 }}
        key={activeIcon}
      >
        <div className={`${icons[activeIcon].color} p-4 rounded-full bg-gray-800/50`}>
          {icons[activeIcon].icon}
        </div>
      </motion.div>
      
      {/* Floating emojis animation */}
      {[1, 2, 3].map((i) => (
        <motion.span
          key={i}
          className="absolute text-2xl"
          initial={{ y: 0, x: Math.random() * 100 - 50, opacity: 0 }}
          animate={{ 
            y: -100, 
            x: Math.random() * 100 - 50, 
            opacity: [0, 1, 0],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            repeatDelay: 1,
            delay: i * 0.5
          }}
        >
          {["💻", "🎧", "☕", "✨", "🚀"][Math.floor(Math.random() * 5)]}
        </motion.span>
      ))}
    </div>
  );
};

const ProjectPreview = ({ demoLink }: { demoLink: string }) => {
  return (
    <motion.div 
      className="absolute inset-0 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10" />
      <iframe
        src={demoLink}
        className="absolute inset-0 w-full h-full"
        loading="lazy"
        title="Project Preview"
      />
      <div className="absolute bottom-4 left-0 right-0 flex justify-center z-20">
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-4 py-2 bg-white/90 text-gray-900 rounded-lg font-medium hover:bg-white transition-all"
          onClick={(e) => e.stopPropagation()}
        >
          <FaExternalLinkAlt className="mr-2" />
          Open Full Preview
        </a>
      </div>
    </motion.div>
  );
};

export default function OpenSourceProjects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (selectedProject !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedProject]);

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Open Source</span> Projects
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            Interactive showcase of my publicly available projects with live previews
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {openSourceProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={project.previewAnimation.initial}
              animate={isInView ? project.previewAnimation.animate : {}}
              transition={project.previewAnimation.transition}
              whileHover={{ y: -10 }}
              className="relative h-80 rounded-xl overflow-hidden shadow-2xl cursor-pointer"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => setSelectedProject(index)}
            >
              {/* Default Project Card */}
              <div className="absolute inset-0 bg-gray-800 p-6 flex flex-col z-0">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <motion.span 
                      key={tech}
                      className="px-2 py-1 text-xs rounded-full bg-gray-700 text-gray-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                  whileHover={{ scale: 1.03 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaGithub className="mr-2" /> View Code
                </motion.a>
              </div>

              {/* Hover Preview Overlay */}
              <AnimatePresence>
                {hoveredProject === index && (
                  <ProjectPreview demoLink={project.demoLink} />
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Fullscreen Modal */}
        <AnimatePresence>
          {selectedProject !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative w-full max-w-6xl h-[80vh] rounded-xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <ProjectPreview demoLink={openSourceProjects[selectedProject].demoLink} />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors z-30"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Animated GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.div
            animate={isInView ? {
              scale: [1, 1.05, 1],
              transition: { repeat: Infinity, duration: 3 }
            } : {}}
          >
            <a
              href="https://github.com/Gianguyen1234"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all shadow-lg hover:shadow-cyan-500/30"
            >
              <FaGithub className="mr-3 text-xl" />
              <span className="text-lg font-semibold">Explore All Projects on GitHub</span>
            </a>
          </motion.div>
        </motion.div>

        
        {/* Holy_Dev Facebook Group Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-24 bg-gray-800/50 rounded-xl p-8 backdrop-blur-sm border border-gray-700"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div 
              className="flex-1"
              initial={{ x: -20 }}
              animate={isInView ? { x: 0 } : {}}
              transition={{ delay: 0.9 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center">
                <FaFacebook className="text-blue-500 mr-3" />
                Join the Holy_Dev Community
              </h3>
              <p className="text-gray-300 mb-6">
                Connect with fellow developers, share knowledge, and grow together in our Facebook group. 
                A space for coding discussions, project showcases, and tech support.
              </p>
              <a
                href="https://www.facebook.com/groups/1602871750421388"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                <FaFacebook className="mr-3" />
                Visit Holy_Dev on Facebook
              </a>
            </motion.div>
            
            <motion.div 
              className="flex-1"
              initial={{ x: 20 }}
              animate={isInView ? { x: 0 } : {}}
              transition={{ delay: 0.9 }}
            >
              <div className="bg-gray-900/70 p-6 rounded-lg border border-gray-700">
                <h4 className="text-xl font-semibold text-cyan-400 mb-4">Group Highlights</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>Daily coding challenges and discussions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>Project feedback and collaboration opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>Tech news and resource sharing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>Beginner-friendly environment</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Enjoy Coding Animation Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="mt-16 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Enjoy the Coding Journey
            </span>
          </h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Coding is not just about work - it is about passion, creativity, and the joy of building something amazing.
          </p>
          
          <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
            <CodingEnjoymentAnimation />
            
            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <p className="text-gray-300 mb-6">
                Remember to take breaks, enjoy your coffee, and celebrate your progress!
              </p>
              <div className="flex justify-center gap-4">
                {["💡", "🎯", "👨‍💻", "🤝", "🎉"].map((emoji, i) => (
                  <motion.span
                    key={i}
                    className="text-3xl"
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.2
                    }}
                  >
                    {emoji}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>

    </section>
  );
}