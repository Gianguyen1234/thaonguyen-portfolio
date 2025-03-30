"use client";

import { useState } from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const allProjects = [
  {
    title: "Developer Portfolio",
    subtitle: "Professional Showcase Website",
    category: "Next.js",
    image: "/images/projects/thaonguyen-portfolio.png", // Add your portfolio screenshot
    description:
      "A modern, interactive portfolio website showcasing my skills, projects, and professional journey.",
    features: [
      "Responsive design for all devices",
      "Interactive project showcases",
      "Case study presentations",
      "Performance optimized",
      "Animated UI elements",
    ],
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "TypeScript",
    ],
    githubLink: "https://github.com/Gianguyen1234/thaonguyen-portfolio",
    demoLink: "https://your-portfolio-url.com", // Add your live URL
    caseStudy: {
      problem:
        "Needed a professional way to showcase my skills and projects to potential clients and employers in the tech industry.",
      solution:
        "Developed a performant portfolio using modern web technologies with interactive elements to engage visitors and effectively present my work.",
      impact:
        "Increased professional opportunities and provided a centralized hub for my online presence, resulting in more freelance inquiries.",
    },
  },
  {
    title: 'Open English VN',
    subtitle: 'English Learning Resources for Vietnamese',
    category: 'Astro',
    image: '/images/projects/open-english-vn.webp', // Add your screenshot
    description: 'A curated collection of high-quality English learning resources specifically tailored for Vietnamese learners.',
    features: [
      'Categorized learning resources',
      'Vietnamese-English translations',
      'Responsive design for all devices',
      'Fast static site performance',
      'Easy content updates',
      'Dark/light mode support'
    ],
    technologies: [
      'Astro',
      'Tailwind CSS',
      'JavaScript',
      'Markdown',
      'Vite'
    ],
    githubLink: 'https://github.com/Gianguyen1234/open-english-vn',
    demoLink: 'https://open-english-vn.vercel.app', // Add your live URL if deployed
    caseStudy: {
      problem: "Vietnamese learners struggle to find quality English resources that address their specific challenges and language gaps.",
      solution: "Created a curated, organized collection of the best English learning resources with Vietnamese context and explanations.",
      impact: "Helped thousands of Vietnamese learners improve their English with targeted resources, earning positive community feedback."
    }
  },
  {
    title: "PHP E-commerce Platform",
    subtitle: "Clothing Store",
    category: "PHP",
    image: "/ecommerce-project.jpg", // Replace with actual image path
    description:
      "A full-featured e-commerce platform with comprehensive product management and customer experience features.",
    features: [
      "Product browsing with filters",
      "Shopping cart system",
      "Secure checkout process",
      "User authentication",
      "Order management dashboard",
      "Product reviews system",
      "Admin control panel",
    ],
    technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap", "jQuery"],
    githubLink: "https://github.com/Gianguyen1234/PHP_WEB_ECOMMERCIAL",
    demoLink: "#", // Add your live demo link
    caseStudy: {
      problem:
        "Local clothing retailers needed an affordable e-commerce solution that could handle their inventory and sales.",
      solution:
        "Developed a custom PHP platform with all essential e-commerce features at a fraction of the cost of commercial solutions.",
      impact:
        "Reduced client's operational costs by 40% and increased online sales by 120% in the first quarter.",
    },
  },
  {
    title: "Blog Platform",
    subtitle: "Content Management",
    category: "Laravel",
    image: "/blog-platform.jpg", // Replace with actual image path
    description:
      "A modern blog platform with rich content creation tools and user engagement features.",
    features: [
      "Rich text editor",
      "User authentication",
      "Comment system",
      "Content categorization",
      "Admin dashboard",
    ],
    technologies: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript"],
    githubLink: "https://github.com/Gianguyen1234/BlogPost_PHP_Laravel",
    demoLink: "#", // Add your live demo link
    caseStudy: {
      problem:
        "Content creators needed a simple but powerful blogging platform without the limitations of existing solutions.",
      solution:
        "Built a custom Laravel-based platform with flexible content management and customization options.",
      impact:
        "Enabled clients to publish content 3x faster with better engagement metrics.",
    },
  },
  {
    title: 'Furniture REST API',
    subtitle: 'Backend Service for Multiplatform Furniture App',
    category: 'Node.js',
    image: '/images/projects/furniture-api.webp', // Add your screenshot
    description: 'A robust RESTful API serving as the backend for a multiplatform furniture e-commerce application.',
    features: [
      'JWT authentication system',
      'Role-based access control (Admin/User)',
      'Complete CRUD operations',
      'Category-based product search',
      'CORS-enabled for cross-origin access',
      'Documented API endpoints',
      'Production-ready deployment'
    ],
    technologies: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT',
      'Bcrypt.js',
      'Mongoose'
    ],
    githubLink: 'https://github.com/Gianguyen1234/furniture-api',
    demoLink: 'https://your-api-docs-or-live-demo.com', // Add your API docs URL
    caseStudy: {
      problem: "Needed a scalable backend solution for a furniture e-commerce platform that could support web and mobile clients with secure transactions.",
      solution: "Developed a RESTful API with comprehensive authentication, product management, and admin controls using Node.js and Express.",
      impact: "Served as the foundation for multiplatform applications, handling hundreds of requests with 99.9% uptime."
    },
    youtubeLink: 'https://youtube.com/@Holy_Dev' // Add your YouTube channel
  },
  {
    title: 'Furniture Marketplace App',
    subtitle: 'React Native Frontend for Furniture API',
    category: 'React Native',
    image: '/images/projects/furniture-app.webp', // Add your screenshot
    description: 'Mobile application built with React Native and Expo that connects to my Furniture REST API, creating a complete e-commerce solution.',
    features: [
      'JWT authentication flow',
      'Product browsing with category filters',
      'Shopping cart functionality',
      'Order history tracking',
      'User review system',
      'Admin management panel',
      'Responsive mobile UI'
    ],
    technologies: [
      'React Native',
      'Expo',
      'React Navigation',
      'Axios',
      'React Hook Form',
      'Context API',
      'JWT Decode'
    ],
    githubLink: 'https://github.com/Gianguyen1234/exam-project',
    demoLink: 'https://expo.dev/your-project-link', // Add your Expo demo link
    caseStudy: {
      problem: "Needed a mobile interface for my Furniture API that could provide a native-like shopping experience for users on iOS and Android.",
      solution: "Developed a cross-platform mobile app with Expo that fully integrates with the backend API, implementing all key e-commerce features.",
      impact: "Created a complete full-stack solution that demonstrates my ability to connect frontend and backend systems."
    },
    relatedBackend: 'https://github.com/Gianguyen1234/furniture-api', // Link to your API
    youtubeLink: 'https://youtube.com/@Holy_Dev' // Your build process videos
  },
  {
    title: "Student Management System",
    subtitle: "Educational Platform",
    category: "TypeScript",
    image: "/student-management.jpg", // Replace with actual image path
    description:
      "A comprehensive system for managing student records, courses, and academic progress.",
    features: [
      "Student profile management",
      "Course enrollment",
      "Grade tracking",
      "Attendance system",
      "Reporting dashboard",
    ],
    technologies: ["TypeScript", "React", "Node.js", "MongoDB", "Refine"],
    githubLink: "https://github.com/Gianguyen1234/Student-Management-System",
    demoLink: "#", // Add your live demo link
    caseStudy: {
      problem:
        "Educational institutions struggled with outdated record-keeping systems that were inefficient and error-prone.",
      solution:
        "Created a modern web application with real-time updates and comprehensive reporting capabilities.",
      impact:
        "Improved administrative efficiency by 60% and reduced record-keeping errors by 85%.",
    },
  },
  {
    title: "Amphibians App",
    subtitle: "Wildlife Information",
    category: "Kotlin",
    image: "/amphibians-app.jpg", // Replace with actual image path
    description:
      "A mobile application for exploring and learning about various amphibian species.",
    features: [
      "API data integration",
      "Species catalog",
      "Detailed information pages",
      "Search functionality",
      "Offline caching",
    ],
    technologies: ["Kotlin", "Jetpack Compose", "Retrofit", "Room DB"],
    githubLink: "https://github.com/Gianguyen1234/Amphibians",
    demoLink: "#", // Add your live demo link
    caseStudy: {
      problem:
        "Nature enthusiasts lacked an accessible mobile resource for amphibian information.",
      solution:
        "Developed an intuitive Android app with comprehensive species data from a wildlife API.",
      impact:
        "App adopted by several environmental education programs with over 5,000 downloads.",
    },
  },
  
];

const categoryFilters = ['All', 'Next.js', 'Astro', 'Node.js', 'React Native', 'PHP', 'TypeScript', 'Kotlin', 'Laravel'];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<
    (typeof allProjects)[number] | null
  >(null);

  const filteredProjects =
    selectedCategory === "All"
      ? allProjects
      : allProjects.filter((project) => project.category === selectedCategory);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Projects
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore my portfolio of professional projects, each with detailed
            case studies and technical insights.
          </p>
        </motion.div>

        {/* Filter Controls */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categoryFilters.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  width={1200} // Set your desired display width
                  height={800} // Set your desired display height
                  className="object-cover"
                  priority={index < 3} // Lazy load except for first few images
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-cyan-400 mb-4">{project.subtitle}</p>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded bg-gray-700 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs rounded bg-gray-700 text-gray-300">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                <div className="flex space-x-3">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub className="mr-2" /> Code
                  </a>
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaExternalLinkAlt className="mr-2" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Case Study Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                className="bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Project Header */}
                <div className="relative h-64 w-full">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <h2 className="text-3xl font-bold text-white">
                      {selectedProject.title}
                    </h2>
                    <p className="text-cyan-400 text-xl">
                      {selectedProject.subtitle}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 bg-gray-900/50 rounded-full text-white hover:bg-gray-700 transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <h3 className="text-2xl font-bold text-white mb-4">
                        Project Overview
                      </h3>
                      <p className="text-gray-300 mb-6">
                        {selectedProject.description}
                      </p>

                      <h3 className="text-2xl font-bold text-white mb-4">
                        Case Study
                      </h3>
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-xl font-semibold text-cyan-400 mb-2">
                            The Challenge
                          </h4>
                          <p className="text-gray-300">
                            {selectedProject.caseStudy.problem}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-cyan-400 mb-2">
                            My Solution
                          </h4>
                          <p className="text-gray-300">
                            {selectedProject.caseStudy.solution}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-cyan-400 mb-2">
                            The Impact
                          </h4>
                          <p className="text-gray-300">
                            {selectedProject.caseStudy.impact}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-1">
                      <div className="bg-gray-700/50 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-white mb-4">
                          Project Details
                        </h3>

                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-cyan-400 mb-2">
                            Key Features
                          </h4>
                          <ul className="space-y-2">
                            {selectedProject.features.map((feature, index) => (
                              <li key={index} className="flex items-start">
                                <svg
                                  className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                                <span className="text-gray-300">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-cyan-400 mb-2">
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedProject.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 text-sm rounded-full bg-gray-600 text-gray-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-col space-y-3">
                          <a
                            href={selectedProject.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center px-4 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-500 transition-colors"
                          >
                            <FaGithub className="mr-2" /> View Source Code
                          </a>
                          {selectedProject.demoLink && (
                            <a
                              href={selectedProject.demoLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-colors"
                            >
                              <FaExternalLinkAlt className="mr-2" /> View Live
                              Demo
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
