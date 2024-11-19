import { useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/addProduct" className="text-white text-2xl font-bold">
              Add Products
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md">
              Home
            </Link>
            <Link to="/about" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md">
              About
            </Link>
            <Link to="/services" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md">
              Services
            </Link>
            <Link to="/Profile" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md">
            <i className="fa-solid fa-user"></i>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-blue-700 px-3 py-2 rounded-md focus:outline-none"
            >
              {isOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-600">
          <a href="/" className="block text-white hover:bg-blue-700 px-3 py-2 rounded-md">
            Home
          </a>
          <a href="/about" className="block text-white hover:bg-blue-700 px-3 py-2 rounded-md">
            About
          </a>
          <a href="/services" className="block text-white hover:bg-blue-700 px-3 py-2 rounded-md">
            Services
          </a>
          <a href="/contact" className="block text-white hover:bg-blue-700 px-3 py-2 rounded-md">
          
          </a>
        </div>
      )}
    </nav>
  );
}
