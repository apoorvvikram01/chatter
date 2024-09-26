import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col items-center justify-between sm:flex-row ">
        {/* Footer Text */}
        <p className="text-sm mb-4 sm:mb-0 pl-2 font-semibold">Crafted by Apoorv Vikram</p>

        {/* Social Links */}
        <div className="flex space-x-6 pr-6">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition "
          >
            <FaLinkedin className="w-6 h-6" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <FaGithub className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
