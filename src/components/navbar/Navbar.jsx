import SearchInput from "../search-input/SearchInput";
import logo from "/src/assets/images/logo.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__nav-brand">
        <img src={logo} className="w-14 rounded-full" alt="logo" />
        <h2 className="text-2xl max-sm:hidden bg-gradient-to-r from-red-600 via-gray-600 to-white bg-clip-text ml-2 text-transparent">
          TrailHive
        </h2>
      </div>
      <div className="flex ml-auto gap-2 mr-4">
        <a
          href="https://github.com/azman08"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition duration-300"
        >
          <FaGithub size={28} />
        </a>
        <a
          href="https://www.linkedin.com/in/azman08/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition duration-300"
        >
          <FaLinkedin size={28} />
        </a>
      </div>

      <SearchInput />
    </div>
  );
}
