"use client"; // This directive tells Next.js that this file is a client component

import { useState } from 'react';
import Filter from '../components/filter'; 

const allProjects = [
  { title: 'Web Project 1', category: 'Web Development', image: 'https://via.placeholder.com/500x300', description: 'A web development project.' },
  { title: 'Design Project 1', category: 'Design', image: 'https://via.placeholder.com/500x300', description: 'A design project.' },
  { title: 'ML Project 1', category: 'Machine Learning', image: 'https://via.placeholder.com/500x300', description: 'A machine learning project.' },
  { title: 'Other Project 1', category: 'Other', image: 'https://via.placeholder.com/500x300', description: 'An other type of project.' },
  // Add more projects as needed
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? allProjects
    : allProjects.filter(project => project.category === selectedCategory);

  return (
    <main className="p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">My Projects</h1>
      <Filter onFilterChange={(category) => setSelectedCategory(category)} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div key={project.title} className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-md mx-auto transition-transform transform hover:scale-105">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">{project.title}</h2>
                <span className="text-sm text-gray-500">{project.category}</span>
              </div>
              <p className="text-md mb-4 text-gray-700">
                {project.description}
              </p>
              <a
                href="#"
                className="inline-block px-4 py-2 text-blue-500 hover:text-blue-600 font-medium border border-blue-500 rounded-lg transition-colors hover:bg-blue-100"
              >
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
