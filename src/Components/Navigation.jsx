import { Link } from "react-router";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header(){
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="fixed top-0 w-full flex justify-between items-center px-4 sm:px-8 lg:px-10 py-6 backdrop-blur-md bg-gray-800/75 z-50">
      <div className="text-xl sm:text-2xl font-bold italic text-white">
        ISHIMWE<span className="text-[#E2FF6F]">Ivan</span>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex gap-8 font-medium text-white">
        <Link to="/" className="hover:text-[#E2FF6F] cursor-pointer transition">Home</Link>
        <Link to="/projects" className="hover:text-[#E2FF6F] cursor-pointer transition">Projects</Link>
        <Link to="/skills" className="hover:text-[#E2FF6F] cursor-pointer transition">Skills</Link>
        <Link to="/about" className="hover:text-[#E2FF6F] cursor-pointer transition">About</Link>
        <Link to="/contact" className="hover:text-[#E2FF6F] cursor-pointer border border-white px-4 py-1 rounded-full transition">Contact</Link>
      </ul>

      {/* Mobile Menu Button */}
      <button 
        className="lg:hidden text-white text-2xl"
        onClick={toggleMenu}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 right-0 w-full bg-gray-900/95 backdrop-blur-md border-t border-[#E2FF6F]/30">
          <ul className="flex flex-col gap-4 font-medium text-white p-6 py-8">
            <Link 
              to="/" 
              className="hover:text-[#E2FF6F] cursor-pointer transition text-lg" 
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link 
              to="/projects" 
              className="hover:text-[#E2FF6F] cursor-pointer transition text-lg" 
              onClick={closeMenu}
            >
              Projects
            </Link>
            <Link 
              to="/skills" 
              className="hover:text-[#E2FF6F] cursor-pointer transition text-lg" 
              onClick={closeMenu}
            >
              Skills
            </Link>
            <Link 
              to="/about" 
              className="hover:text-[#E2FF6F] cursor-pointer transition text-lg" 
              onClick={closeMenu}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="hover:text-[#E2FF6F] cursor-pointer border border-white px-4 py-2 rounded-full transition text-lg text-center" 
              onClick={closeMenu}
            >
              Contact
            </Link>
          </ul>
        </div>
      )}
    </nav>   
    )
}