"use client"; // This directive tells Next.js that this file is a client component

import { useState } from 'react';
import Filter from '../components/filter'; 

const allProjects = [
  { title: 'Web Project 1', category: 'Web Development', image: 'https://via.placeholder.com/500x300', description: 'A web development project.', githubLink: 'https://github.com/your-username/web-project-1' },
  { title: 'Design Project 1', category: 'Design', image: 'https://via.placeholder.com/500x300', description: 'A design project.', githubLink: 'https://github.com/your-username/design-project-1' },
  { title: 'ML Project 1', category: 'Machine Learning', image: 'https://via.placeholder.com/500x300', description: 'A machine learning project.', githubLink: 'https://github.com/your-username/ml-project-1' },
  { title: 'Other Project 1', category: 'Other', image: 'https://via.placeholder.com/500x300', description: 'An other type of project.', githubLink: 'https://github.com/your-username/other-project-1' },
  // Add more projects as needed
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? allProjects
    : allProjects.filter(project => project.category === selectedCategory);

  return (
    <main className="p-8 min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-gray-900">
      <div className="max-w-6xl mx-auto bg-gray-900 rounded-lg shadow-2xl p-8">
        <h1 className="text-5xl font-extrabold mb-8 text-center text-white">My Projects</h1>
        <Filter onFilterChange={(category) => setSelectedCategory(category)} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.title} className="bg-gradient-to-r from-violet-500 via-pink-500 to-cyan-500 rounded-lg shadow-2xl overflow-hidden transform transition-transform hover:rotate-3d hover:scale-105 hover:shadow-xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-3xl font-bold text-white">{project.title}</h2>
                  <span className="text-sm text-gray-300">{project.category}</span>
                </div>
                <p className="text-md mb-4 text-gray-200">
                  {project.description}
                </p>
                <a
                  href={project.githubLink}
                  className="inline-block px-4 py-2 text-white bg-blue-400 hover:bg-blue-500 font-medium border border-blue-400 rounded-lg transition-colors hover:bg-blue-300"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
