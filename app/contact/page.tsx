"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: false, email: false, message: false });

  const validateForm = () => {
    const newErrors = {
      name: !formData.name.trim(),
      email: !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email),
      message: !formData.message.trim(),
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Message sent successfully!');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <main className="p-8 max-w-3xl mx-auto bg-gradient-to-r from-indigo-900 via-teal-800 to-gray-900 rounded-lg shadow-xl mt-16">
      {/* Header and Description */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-semibold text-white mb-4">Contact Me</h1>
        <p className="text-lg text-gray-300">
          I’m excited to hear from you. Please contact me if you have any questions or ideas to work together.
        </p>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="space-y-6 bg-gray-800 p-6 rounded-lg shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div>
          <label htmlFor="name" className="block text-lg font-medium text-gray-200 mb-2">Name</label>
          <input
            type="text"
            id="name"
            className={`w-full p-3 border ${errors.name ? 'border-red-500' : 'border-gray-700'} rounded-md shadow-sm bg-gray-900 text-white focus:ring-1 focus:ring-teal-500 focus:border-teal-500 transition duration-300 ease-in-out`}
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <p className="text-red-500 text-sm mt-2">Name is required.</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-lg font-medium text-gray-200 mb-2">Email</label>
          <input
            type="email"
            id="email"
            className={`w-full p-3 border ${errors.email ? 'border-red-500' : 'border-gray-700'} rounded-md shadow-sm bg-gray-900 text-white focus:ring-1 focus:ring-teal-500 focus:border-teal-500 transition duration-300 ease-in-out`}
            placeholder="john.doe@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="text-red-500 text-sm mt-2">Please enter a valid email address.</p>}
        </div>
        <div>
          <label htmlFor="message" className="block text-lg font-medium text-gray-200 mb-2">Message</label>
          <textarea
            id="message"
            rows={6}
            className={`w-full p-3 border ${errors.message ? 'border-red-500' : 'border-gray-700'} rounded-md shadow-sm bg-gray-900 text-white focus:ring-1 focus:ring-teal-500 focus:border-teal-500 transition duration-300 ease-in-out`}
            placeholder="Your message here..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm mt-2">Message is required.</p>}
        </div>

        {/* ReCAPTCHA (Placeholder for now) */}
        <div className="bg-gray-900 p-3 rounded-md text-gray-400 text-center">
          ReCAPTCHA placeholder 
        </div>

        <button
          type="submit"
          className="w-full bg-teal-600 text-white py-3 px-4 rounded-lg shadow-md hover:bg-teal-700 transition duration-300 ease-in-out"
        >
          Send Message
        </button>
      </motion.form>

      {/* Social Links */}
      <motion.div
        className="flex justify-center space-x-6 mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <a href="https://github.com" className="text-gray-300 hover:text-white">
          GitHub
        </a>
        <a href="https://linkedin.com" className="text-gray-300 hover:text-white">
          LinkedIn
        </a>
        <a href="https://twitter.com" className="text-gray-300 hover:text-white">
          Twitter
        </a>
      </motion.div>

      {/* Google Maps Embed (Optional, replace the src with your location) */}
      <motion.div
        className="mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.6839367158484!2d-74.00601548459358!3d40.71277527932852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a19cb8c76b1%3A0xa36b9c8eaa6c6f5a!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2s!4v1606771946485!5m2!1sen!2s"
          width="100%"
          height="300"
          className="border-0 rounded-lg shadow-lg"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </motion.div>
    </main>
  );
}
