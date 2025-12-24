'use client';

import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaDownload } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  const hoverClass = "transition duration-300 border border-transparent rounded-full p-2 hover:text-pink-400 hover:border-pink-400 hover:shadow-[0_0_12px_rgba(236,72,153,0.6)]";
  return (
    <footer className="bg-black text-white py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Left: Copyright */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Nishant Rajput. All rights reserved.
        </p>

        {/* Center: Social Links */}
        <div className="flex space-x-6 text-xl">
          {/* Common hover class */}

          <a
            href="https://github.com/rajputnishant29"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 border border-transparent rounded-full p-2 hover:text-pink-400 hover:border-pink-400 hover:shadow-[0_0_12px_rgba(236,72,153,0.6)]"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/rajputnishant29"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 border border-transparent rounded-full p-2 hover:text-pink-400 hover:border-pink-400 hover:shadow-[0_0_12px_rgba(236,72,153,0.6)]"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://instagram.com/rajputnishant29"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 border border-transparent rounded-full p-2 hover:text-pink-400 hover:border-pink-400 hover:shadow-[0_0_12px_rgba(236,72,153,0.6)]"
          >
            <FaInstagram />
          </a>

          <a
            href="https://x.com/rajputnishant29"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 border border-transparent rounded-full p-2 hover:text-pink-400 hover:border-pink-400 hover:shadow-[0_0_12px_rgba(236,72,153,0.6)]"
          >
            <FaTwitter />
          </a>

          <a
            href="mailto:nishantrajput7017@gmail.com"
            className="transition duration-300 border border-transparent rounded-full p-2 hover:text-pink-400 hover:border-pink-400 hover:shadow-[0_0_12px_rgba(236,72,153,0.6)]"
          >
            <MdEmail />
          </a>
          <a
            href="/apk/OweZone.apk"
            download
            title="Download APK"
            className="transition duration-300 border border-transparent rounded-full p-2 hover:text-green-400 hover:border-green-400 hover:shadow-[0_0_12px_rgba(34,197,94,0.6)]"
          >
            <FaDownload />
          </a>
        </div>

        {/* Right: Tagline */}
        <p className="text-sm text-gray-500 text-center md:text-right">
          Built with 💖 in India
        </p>
      </div>
    </footer>
  );
};

export default Footer;
