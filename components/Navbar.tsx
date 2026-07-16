"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <h1 className="text-2xl font-bold text-yellow-400">
          Vishal Clicks Films
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-white font-medium">
          <li>
            <a href="#home" className="hover:text-yellow-400 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#portfolio" className="hover:text-yellow-400 transition">
              Portfolio
            </a>
          </li>

          <li>
            <a href="#services" className="hover:text-yellow-400 transition">
              Services
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-yellow-400 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-3xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 text-white px-8 py-6">
          <ul className="flex flex-col gap-6 text-lg">

            <li>
              <a
                href="#home"
                onClick={() => setIsOpen(false)}
                className="hover:text-yellow-400 transition"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#portfolio"
                onClick={() => setIsOpen(false)}
                className="hover:text-yellow-400 transition"
              >
                Portfolio
              </a>
            </li>

            <li>
              <a
                href="#services"
                onClick={() => setIsOpen(false)}
                className="hover:text-yellow-400 transition"
              >
                Services
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="hover:text-yellow-400 transition"
              >
                Contact
              </a>
            </li>

          </ul>
        </div>
      )}
    </nav>
  );
}