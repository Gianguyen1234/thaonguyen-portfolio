"use client";

import { motion } from 'framer-motion';
import { FaYoutube, FaGithub, FaPencilAlt, FaExternalLinkAlt, FaFacebook } from 'react-icons/fa';
import { SiTelegram } from 'react-icons/si';

export default function VideoShowcase() {
  const videos = [
    {
      id: "lynx-tutorial",
      title: "Lynx on Windows - Installation Guide",
      url: "https://www.youtube.com/embed/eoBJU9ir79I",
      description: "Complete walkthrough for installing Lynx framework on Windows systems",
      highlights: [
        "Node.js installation methods",
        "Project setup with npm",
        "Expo Orbit configuration",
        "App testing workflow"
      ],
      tags: ["Lynx", "Windows", "React Native"]
    },
    {
      id: "telegram-bot",
      title: "AI-Powered Telegram Chatbot",
      url: "https://www.youtube.com/embed/B3QlBwq4Wu4",
      description: "Building 'Linh' - a multilingual AI companion with Python and Gemini API",
      resources: [
        {
          icon: <SiTelegram />,
          text: "Try Linh Bot",
          url: "https://t.me/My_Twin_AI_bot"
        },
        {
          icon: <FaPencilAlt />,
          text: "Technical Docs",
          url: "https://harrypage.hashnode.dev/building-a-personalized-telegram-chatbot-with-python-and-gemini-20-flash"
        }
      ],
      tags: ["Python", "AI", "Telegram"]
    },
    {
      id: "terminal-commands",
      title: "10 Fun Terminal Commands (Ubuntu)",
      url: "https://www.youtube.com/embed/L1iE7bGOfnQ",
      description: "Discover useful and entertaining Linux terminal commands for developers",
      highlights: [
        "System monitoring tools",
        "Creative ASCII displays",
        "Productivity shortcuts",
        "Network utilities"
      ],
      tags: ["Linux", "Ubuntu", "Terminal"]
    }
  ];

  const communities = [
    {
      name: "Open English VN Community",
      url: "https://www.facebook.com/groups/501799607277748",
      icon: <FaFacebook className="text-blue-500" />,
      description: "Join our Facebook group for English learners in Vietnam"
    },
    {
      name: "Dev Maniac YouTube",
      url: "https://www.youtube.com/@dev-maniac2349",
      icon: <FaYoutube className="text-red-500" />,
      description: "Subscribe for coding tutorials and tech content"
    }
  ];

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Hero Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center bg-gradient-to-r from-red-600 to-red-800 text-white p-3 rounded-full mb-6">
            <FaYoutube className="text-3xl mr-2" />
            <span className="font-medium">DEV TUTORIALS</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Learn Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">My Videos</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Technical walkthroughs, coding tutorials, and project deep dives from my YouTube channel
          </p>
        </motion.div>

        {/* Video Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-400/30 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-cyan-500/10"
            >
              {/* Video Embed */}
              <div className="relative aspect-video">
                <iframe
                  src={video.url}
                  className="absolute inset-0 w-full h-full"
                  title={`${video.title} - YouTube Video`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Video Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{video.title}</h3>
                <p className="text-gray-300 mb-4">{video.description}</p>
                
                {/* Highlights or Resources */}
                <div className="mb-4">
                  {video.highlights && (
                    <ul className="space-y-2">
                      {video.highlights.map((item, i) => (
                        <li key={i} className="flex items-start text-gray-400">
                          <span className="text-cyan-400 mr-2">▹</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {video.resources && (
                    <div className="space-y-3 mt-4">
                      {video.resources.map((resource, i) => (
                        <a
                          key={i}
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center px-3 py-2 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors"
                        >
                          <span className="text-cyan-400 mr-2">{resource.icon}</span>
                          <span className="text-white">{resource.text}</span>
                          <FaExternalLinkAlt className="ml-auto text-xs text-gray-400" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {video.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 text-xs rounded-full bg-gray-700 text-gray-300">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Watch Button */}
                <div className="mt-6">
                  <a
                    href={video.url.replace('embed/', 'watch?v=')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full py-2.5 px-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg hover:from-red-700 hover:to-red-800 transition-all shadow-md hover:shadow-red-500/20"
                  >
                    <FaYoutube className="mr-2" />
                    Watch on YouTube
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Communities Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Join</span> My Communities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {communities.map((community, index) => (
              <motion.a
                key={index}
                href={community.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -5 }}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-cyan-400/30 transition-all duration-300 flex items-start"
              >
                <div className="text-3xl mr-4 mt-1">
                  {community.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{community.name}</h3>
                  <p className="text-gray-300">{community.description}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Channel CTA */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 sm:p-10 border border-gray-700 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Want More Developer Content?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Subscribe to my YouTube channel for regular tutorials on web development, mobile apps, and cutting-edge technologies.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://www.youtube.com/@dev-maniac2349"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors shadow-lg hover:shadow-red-500/30"
            >
              <FaYoutube className="mr-2 text-xl" />
              Visit My Channel
            </a>
            <a
              href="https://github.com/Gianguyen1234"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
            >
              <FaGithub className="mr-2 text-xl" />
              Explore My Code
            </a>
          </div>
        </motion.div>
      </div>
    </motion.main>
  );
}