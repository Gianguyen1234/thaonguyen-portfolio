// components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <div className="text-lg font-bold">My Portfolio</div>
        <div>
          {/* Fix: Remove the <a> tags inside the <Link> components */}
          <Link href="/" className="px-3">
            Home
          </Link>
          <Link href="/about" className="px-3">
            About
          </Link>
          <Link href="/projects" className="px-3">
            Projects
          </Link>
          <Link href="/contact" className="px-3">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
