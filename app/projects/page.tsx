"use client";

import { useState } from 'react';
import Filter from '../components/filter'; 
import Image from 'next/image';

const allProjects = [
  { title: 'PHP E-commerce Platform - Clothing Store', category: 'PHP', image: 'https://via.placeholder.com/500x300', description: 'This project provides a fully functional online store where users can browse products, add them to a shopping cart, place orders, and receive support via a question-based chatbot. The system includes features like user authentication, order management, product history, product comments, and a fully functional admin panel to manage products, orders, and users.', githubLink: 'https://github.com/Gianguyen1234/PHP_WEB_ECOMMERCIAL' },
  { title: 'Student-management-system', category: 'Typescript', image: 'https://via.placeholder.com/500x300', description: 'a superplate project with refine ', githubLink: 'https://github.com/Gianguyen1234/Student-Management-System' },
  { title: 'Amphibians', category: 'Kotlin', image: 'https://via.placeholder.com/500x300', description: 'A jetpack compose app for calling and retrieving the Api.', githubLink: 'https://github.com/Gianguyen1234/Amphibians' },
  { title: 'Blog Post ', category: 'PHP-Laravel', image: 'https://via.placeholder.com/500x300', description: 'A blog post project with Laravel', githubLink: 'https://github.com/Gianguyen1234/BlogPost_PHP_Laravel' },
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
        <div className="flex justify-center mt-4">
          <button 
            onClick={() => setSelectedCategory('All')} 
            className={`px-4 py-2 font-medium rounded-lg text-white border transition-colors ${selectedCategory === 'All' ? 'bg-blue-500 border-blue-500' : 'border-blue-300 hover:bg-blue-400'}`}>
            View All
          </button>
        </div>
        {/* Updated grid layout with auto-fit and minmax */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 grid-cols-auto-fit">
          {filteredProjects.map((project) => (
            <div key={project.title} className="relative rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl hover:backdrop-blur-sm hover:shadow-blue-500/50">
              <div className="absolute inset-0 rounded-lg border-4 border-transparent hover:border-gradient-to-r from-pink-500 via-purple-500 to-blue-500 transition-all"></div>
              <div className="relative w-full bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  objectFit="cover"
                  className="transition-transform duration-500 ease-in-out transform hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="relative p-6 bg-gray-800 rounded-b-lg">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-3xl font-bold text-white">{project.title}</h2>
                  <span className="text-sm text-gray-400">{project.category}</span>
                </div>
                <p className="text-md mb-4 text-gray-300">
                  {project.description}
                </p>
                <a
                  href={project.githubLink}
                  className="inline-block px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 font-medium border border-blue-500 rounded-lg transition-colors"
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
