import Link from 'next/link';
import '@fortawesome/fontawesome-free/css/all.min.css'; 

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Brand */}
        <div className="text-lg font-bold">
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <i className="fas fa-user-circle fa-2x mr-2"></i> 
              My Portfolio
            </div>
          </Link>
        </div>
        {/* Navigation Links */}
        <div className="flex space-x-4">
          <Link href="/">
            <div className="px-3 py-2 transition-transform transform hover:scale-105 hover:text-yellow-300 flex items-center cursor-pointer">
              <i className="fas fa-home"></i> {/* Home icon */}
              <span className="ml-1">Home</span>
            </div>
          </Link>
          <Link href="/about">
            <div className="px-3 py-2 transition-transform transform hover:scale-105 hover:text-yellow-300 flex items-center cursor-pointer">
              <i className="fas fa-user"></i> {/* About icon */}
              <span className="ml-1">About</span>
            </div>
          </Link>
          <Link href="/projects">
            <div className="px-3 py-2 transition-transform transform hover:scale-105 hover:text-yellow-300 flex items-center cursor-pointer">
              <i className="fas fa-briefcase"></i> {/* Projects icon */}
              <span className="ml-1">Projects</span>
            </div>
          </Link>
          <Link href="/contact">
            <div className="px-3 py-2 transition-transform transform hover:scale-105 hover:text-yellow-300 flex items-center cursor-pointer">
              <i className="fas fa-envelope"></i> {/* Contact icon */}
              <span className="ml-1">Contact</span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
