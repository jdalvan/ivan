import { Link } from "react-router";

export default function Header(){
    return (
        <nav className="fixed top-0 w-full flex justify-between items-center px-10 py-6 backdrop-blur-md bg-gray-800/75 z-50">
      <div className="text-2xl font-bold italic text-white">
        ISHIMWE<span className="text-[#E2FF6F]">Ivan</span>
      </div>
      <ul className="flex gap-8 font-medium text-white">
        <Link to="/" className="hover:text-[#E2FF6F] cursor-pointer">Home</Link>
        <Link to="/projects" className="hover:text-[#E2FF6F] cursor-pointer">Projects</Link>
        <Link to="/skills" className="hover:text-[#E2FF6F]cursor-pointer">Skills</Link>
        <Link to="/about" className="hover:text-[#E2FF6F] cursor-pointer">About</Link>
        <Link to="/contact" className="hover:text-[#E2FF6F] cursor-pointer border border-white px-4 py-1 rounded-full">Contact</Link>
      </ul>
    </nav>   
    )
}