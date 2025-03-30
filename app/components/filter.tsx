"use client"; // This directive tells Next.js that this file is a client component

import { useState } from 'react';

const categories = [
  'All',
  'PHP',
  'Kotlin',
  'Typescript',
  'PHP-Laravel',
  'Nexjs',
  'Astro',
  'Node.js',
  'React Native',
];

interface FilterProps {
  onFilterChange: (category: string) => void;
}

export default function Filter({ onFilterChange }: FilterProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleChange = (category: string) => {
    setSelectedCategory(category);
    onFilterChange(category);
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Filter by Category</h2>
      <div className="flex flex-wrap gap-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleChange(category)}
            className={`px-4 py-2 rounded-lg border border-gray-300 transition-colors ${
              selectedCategory === category
                ? 'bg-blue-500 text-white'
                : 'bg-white text-blue-500'
            } hover:bg-blue-100`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
