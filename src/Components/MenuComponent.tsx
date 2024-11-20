"use client";
import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const MenuComponent: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // Toggle Menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative flex justify-center items-center h-screen">
      {/* Menu Button (Toggle) */}
      <div
        className={`absolute flex justify-center items-center rounded-full bg-gray-800 text-white text-3xl w-24 h-24 ${
          isMenuOpen ? "opacity-0" : "opacity-100 z-10"
        }`}
        onClick={toggleMenu}
        aria-label="Open menu"
      >
        +
      </div>

      {/* Close Button */}
      <div
        className={`absolute flex justify-center items-center rounded-full bg-gray-800 text-white text-3xl w-24 h-24 ${
          !isMenuOpen ? "opacity-0" : "opacity-100 z-10"
        }`}
        onClick={toggleMenu}
        aria-label="Close menu"
      >
        -
      </div>

      {/* Menu Items */}
      <ul
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-y-6 transition-all duration-500 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Github Icon */}
        <li
          className="menu-item flex justify-center items-center w-16 h-16 rounded-full bg-gray-800 hover:opacity-50 hover:shadow-xl transition duration-300 group"
          style={{
            transform: isMenuOpen
              ? "rotate(142deg) translateY(-245px)"
              : "none",
          }}
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xl"
          >
            <FaGithub />
          </a>
          {/* Tooltip */}
          <span className="absolute hidden group-hover:block bottom-20 left-1/2 transform -translate-x-1/2 text-white bg-gray-800 px-2 py-1 text-sm rounded-md">
            Github
          </span>
        </li>

        {/* Linkedin Icon */}
        <li
          className="menu-item flex justify-center items-center w-16 h-16 rounded-full bg-gray-800 hover:opacity-50 hover:shadow-xl transition duration-300 group"
          style={{
            transform: isMenuOpen ? "rotate(53deg) translateY(-99px)" : "none",
          }}
        >
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xl"
          >
            <FaLinkedin />
          </a>
          {/* Tooltip */}
          <span className="absolute hidden group-hover:block bottom-20 left-1/2 transform -translate-x-1/2 text-white bg-gray-800 px-2 py-1 text-sm rounded-md">
            Linkedin
          </span>
        </li>

        {/* Instagram Icon */}
        <li
          className="menu-item flex justify-center items-center w-16 h-16 rounded-full bg-gray-800 hover:opacity-50 hover:shadow-xl transition duration-300 group"
          style={{
            transform: isMenuOpen
              ? "rotate(-20deg) translateY(-155px)"
              : "none",
          }}
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xl"
          >
            <FaInstagram />
          </a>
          {/* Tooltip */}
          <span className="absolute hidden group-hover:block bottom-20 left-1/2 transform -translate-x-1/2 text-white bg-gray-800 px-2 py-1 text-sm rounded-md">
            Instagram
          </span>
        </li>

        {/* Twitter Icon */}
        <li
          className="menu-item flex justify-center items-center w-16 h-16 rounded-full bg-gray-800 hover:opacity-50 hover:shadow-xl transition duration-300 group"
          style={{
            transform: isMenuOpen
              ? "rotate(-60deg) translateY(-150px)"
              : "none",
          }}
        >
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xl"
          >
            <FaTwitter />
          </a>
          {/* Tooltip */}
          <span className="absolute hidden group-hover:block bottom-20 left-1/2 transform -translate-x-1/2 text-white bg-gray-800 px-2 py-1 text-sm rounded-md">
            Twitter
          </span>
        </li>
      </ul>

      {/* Content */}
      <div className="absolute text-center top-2/3 left-1/2 transform -translate-x-1/2 text-white">
        <h3 className="text-xl font-bold">Click circle!</h3>
        <h6>Tada...!</h6>
      </div>
    </div>
  );
};

export default MenuComponent;
