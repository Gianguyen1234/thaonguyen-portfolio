import '@fortawesome/fontawesome-free/css/all.min.css';

export default function About() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 p-8">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">About Me</h1>
        <p className="text-lg mb-4 text-gray-700">
          Hi! I'm Thao Nguyen, an enthusiastic developer with an insatiable appetite for learning and exploring new technologies. Currently, I'm diving into PHP and mastering the Laravel framework while also building dynamic WordPress websites. I thrive on the thrill of solving complex problems and developing new skills with each project.
        </p>
        <p className="text-lg mb-4 text-gray-700">
          My journey in tech is driven by curiosity and a passion for innovation. Whether it's refining my skills or tackling a challenging problem, I'm always eager to embrace new learning opportunities.
        </p>
        <p className="text-lg text-gray-700">
          Feel free to check out my blogs where I share my insights and experiences:
        </p>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li>
            <a href="https://kafkatraining.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              KafkaBlog: A community-driven space where language learners and tech enthusiasts converge.
            </a>
          </li>
          <li>
            <a href="https://hashnode.com/@harry" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              Hashnode Blog: My personal space where I document my coding journey, explore the latest in web development, and share tips and tricks.
            </a>
          </li>
        </ul>
        <p className="text-lg text-gray-700">
          Connect with me on social media:
        </p>
        <div className="flex space-x-4 mb-4">
          <a href="https://github.com/your-username" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a href="https://facebook.com/your-profile" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a href="https://linkedin.com/in/your-profile" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="https://twitter.com/your-profile" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter fa-2x"></i>
          </a>
        </div>
      </div>
    </main>
  );
}
