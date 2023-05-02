import React from "react";
import { FaLinkedin } from "react-icons/fa";

const Header = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-md header px-5 py-3 flex items-center justify-between">
      <div
        className="logo-container flex items-center cursor-pointer"
        onClick={scrollToTop}
      >
        <img src="/logo.png" alt="Logo de la empresa" className="h-12 w-auto" />
      </div>
      <nav className="nav hidden md:block">
        <ul className="nav-list flex items-center space-x-4">
          <li>
            <button
              onClick={() => scrollToSection("services")}
              className="text-white hover:text-red-500 focus:outline-none"
            >
              Services
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("about")}
              className="text-white hover:text-red-500 focus:outline-none"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white hover:text-red-500 focus:outline-none"
            >
              Contact
            </button>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/pol-morado-a2975022b/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white hover:text-red-500"
            >
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
