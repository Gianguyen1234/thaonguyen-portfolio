export default function Contact() {
    return (
      <main className="p-8 max-w-3xl mx-auto bg-gradient-to-r from-indigo-900 via-teal-800 to-gray-900 rounded-lg shadow-xl mt-16">
        {/* Header and Description */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-semibold text-white mb-4">Contact Me</h1>
          <p className="text-lg text-gray-300">
           I’m excited to hear from you. Please contact me if you have any questions or ideas to work together.
          </p>
        </div>
  
        {/* Contact Form */}
        <form className="space-y-6 bg-gray-800 p-6 rounded-lg shadow-md">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-gray-200 mb-2">Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border border-gray-700 rounded-md shadow-sm bg-gray-900 text-white focus:ring-1 focus:ring-teal-500 focus:border-teal-500 transition duration-300 ease-in-out"
              placeholder="John Doe"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-200 mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-700 rounded-md shadow-sm bg-gray-900 text-white focus:ring-1 focus:ring-teal-500 focus:border-teal-500 transition duration-300 ease-in-out"
              placeholder="john.doe@example.com"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-medium text-gray-200 mb-2">Message</label>
            <textarea
              id="message"
              rows={6}
              className="w-full p-3 border border-gray-700 rounded-md shadow-sm bg-gray-900 text-white focus:ring-1 focus:ring-teal-500 focus:border-teal-500 transition duration-300 ease-in-out"
              placeholder="Your message here..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-3 px-4 rounded-lg shadow-md hover:bg-teal-700 transition duration-300 ease-in-out"
          >
            Send Message
          </button>
        </form>
      </main>
    );
  }
  