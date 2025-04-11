import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Height of hero section minus navbar height (88px)
      const heroSectionEnd = window.innerHeight - 88;
      setIsScrolled(window.scrollY > heroSectionEnd);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarClasses = `fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-12 py-6 transition-all duration-300 ${
    isScrolled ? "bg-white/95 shadow-md backdrop-blur-sm" : "bg-transparent"
  }`;

  const linkClasses = `text-lg font-bold transition-colors ${
    isScrolled
      ? "text-gray-700 hover:text-orange-600"
      : "text-white hover:text-orange-200"
  }`;

  return (
    <nav className={navbarClasses}>
      <h1
        className={`text-3xl font-extrabold ${
          isScrolled
            ? "text-gray-700 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]"
            : "text-white"
        }`}
      >
        TrustNet
      </h1>

      {/* Hamburger Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`lg:hidden focus:outline-none ${
          isScrolled ? "text-gray-700" : "text-white"
        }`}
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
        {[
          "Home",
          "Tracks",
          "Instructions",
          "Committees",
          "Location",
          "Contact Us",
        ].map((item) => (
          <Link
            key={item}
            to={
              item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`
            }
            className={linkClasses}
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden absolute top-[80px] left-0 right-0 ${
          isScrolled ? "bg-white/95" : "bg-black/70"
        } backdrop-blur-sm transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col items-center gap-4 py-6">
          {[
            "Home",
            "Tracks",
            "Instructions to Authors",
            "Committees",
            "Location",
            "Contact Us",
          ].map((item) => (
            <Link
              key={item}
              to={
                item === "Home"
                  ? "/"
                  : `/${item.toLowerCase().replace(" ", "")}`
              }
              className={linkClasses}
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
