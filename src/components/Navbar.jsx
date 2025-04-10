import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-12 py-6 bg-white/95 shadow-md backdrop-blur-sm">
      <h1 className="text-gray-700 text-3xl font-extrabold drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
        TrustNet
      </h1>

      {/* Hamburger Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden text-gray-700 focus:outline-none"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex gap-10">
        <Link
          to="/"
          className="text-gray-700 text-lg font-semibold hover:text-orange-600 transition-colors"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-gray-700 text-lg font-semibold hover:text-orange-600 transition-colors"
        >
          About Conference
        </Link>
        <Link
          to="/cfp"
          className="text-gray-700 text-lg font-semibold hover:text-orange-600 transition-colors"
        >
          CFP
        </Link>
        <Link
          to="/committees"
          className="text-gray-700 text-lg font-semibold hover:text-orange-600 transition-colors"
        >
          Committees
        </Link>
        <Link
          to="/registration"
          className="text-gray-700 text-lg font-semibold hover:text-orange-600 transition-colors"
        >
          Registration
        </Link>
        <Link
          to="/contact"
          className="text-gray-700 text-lg font-semibold hover:text-orange-600 transition-colors"
        >
          Contact Us
        </Link>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden absolute top-[80px] left-0 right-0 bg-white/95 backdrop-blur-sm transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col items-center gap-4 py-6">
          <Link
            to="/"
            className="text-gray-700 text-lg font-semibold hover:text-orange-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-700 text-lg font-semibold hover:text-orange-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            About Conference
          </Link>
          <Link
            to="/cfp"
            className="text-gray-700 text-lg font-semibold hover:text-orange-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            CFP
          </Link>
          <Link
            to="/committees"
            className="text-gray-700 text-lg font-semibold hover:text-orange-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Committees
          </Link>
          <Link
            to="/registration"
            className="text-gray-700 text-lg font-semibold hover:text-orange-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Registration
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 text-lg font-semibold hover:text-orange-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
