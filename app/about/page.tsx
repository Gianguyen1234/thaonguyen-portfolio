import '@fortawesome/fontawesome-free/css/all.min.css';

export default function About() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-8">
      <div className="max-w-4xl w-full bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700 rounded-lg shadow-lg p-10">
        {/* Header Section */}
        <div className="mb-8 text-center">
          <h1 className="text-5xl font-bold mb-4 text-white">About Me</h1>
          <p className="text-lg text-gray-400">A passionate developer & learner</p>
        </div>

        {/* About Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-200 mb-4">
            <i className="fas fa-user-circle mr-2 text-blue-400"></i> Who I Am ?
          </h2>
          <p className="text-lg text-gray-300 mb-4">
            Hello! I am Thao Nguyen, a developer who loves to learn and try new things. I am focused on PHP and Laravel right now. I also work on WordPress websites. I enjoy solving problems and getting better with every project I work on.
          </p>
          <p className="text-lg text-gray-300 mb-4">
            My passion for tech drives me to keep learning. I like taking on challenges and learning new skills.
          </p>
        </div>

        {/* Blog Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-200 mb-4">
            <i className="fas fa-blog mr-2 text-blue-400"></i> My Blogs
          </h2>
          <p className="text-lg text-gray-300 mb-4">
            I share my thoughts and experiences through my blogs:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-300">
            <li>
              <a href="https://kafkablog.kesug.com/" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-book mr-2"></i>KafkaBlog: A space for language learners and tech enthusiasts.
              </a>
            </li>
            <li>
              <a href="https://harrypage.hashnode.dev/" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-pencil-alt mr-2"></i>Hashnode Blog: My personal blog about coding and web development.
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-200 mb-4">
            <i className="fas fa-share-alt mr-2 text-blue-400"></i> Connect with Me
          </h2>
          <p className="text-lg text-gray-300 mb-4">
            You can find me on social media:
          </p>
          <div className="flex space-x-6">
            <a href="https://github.com/Gianguyen1234" className="text-gray-300 hover:text-blue-400" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a href="https://facebook.com/your-profile" className="text-gray-300 hover:text-blue-400" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a href="https://linkedin.com/in/your-profile" className="text-gray-300 hover:text-blue-400" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a href="https://twitter.com/your-profile" className="text-gray-300 hover:text-blue-400" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <a
            href="mailto:your.email@example.com"
            className="inline-block px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 font-medium rounded-lg shadow-md transition-all"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </main>
  );
}
