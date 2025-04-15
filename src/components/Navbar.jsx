import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (isHomePage) {
        const heroSectionEnd = window.innerHeight - 88;
        setIsScrolled(window.scrollY > heroSectionEnd);
      } else {
        setIsScrolled(true);
      }
    };

    handleScroll(); // Call immediately to set initial state
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const handleNavClick = (e, item) => {
    window.scrollTo(0, 0); // Add this line
    if (item === "Location") {
      e.preventDefault();
      navigate("/", { state: { scrollToLocation: true } });
      setIsOpen(false);
    }
  };

  const navbarClasses = `fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-12 transition-all duration-300 ${
    !isHomePage || isScrolled
      ? "bg-white shadow-md py-3"
      : "bg-transparent py-6"
  }`;

  const linkClasses = `text-lg font-bold transition-colors ${
    !isHomePage || isScrolled
      ? "text-gray-700 hover:text-orange-600"
      : "text-white hover:text-orange-200"
  }`;

  return (
    <nav className={navbarClasses}>
      {!isHomePage || isScrolled ? (
        <img
          src="/logo/trustnet-logo-white.png"
          alt="TrustNet Logo"
          className="h-16 w-auto"
        />
      ) : (
        <h1 className="text-3xl font-extrabold text-white">TrustNet</h1>
      )}

      {/* Hamburger Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`lg:hidden focus:outline-none ${
          isHomePage || isScrolled ? "text-gray-700" : "text-white"
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
          "About Conference",
          "CFP",
          "Committees",
          "Registration",
          "Location",
          "Contact Us",
        ].map((item) => (
          <Link
            key={item}
            to={
              item === "Home"
                ? "/"
                : `/${item.toLowerCase().replace(/\s+/g, "")}` // Updated replace pattern
            }
            className={linkClasses}
            onClick={(e) => handleNavClick(e, item)}
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden absolute top-[60px] left-0 right-0 ${
          isHomePage || isScrolled ? "bg-white/95" : "bg-black/70"
        } backdrop-blur-sm transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col items-center gap-4 py-6">
          {[
            "Home",
            "About Conference",
            "CFP",
            "Committees",
            "Registration",
            "Location",
            "Contact Us",
          ].map((item) => (
            <Link
              key={item}
              to={
                item === "Home"
                  ? "/"
                  : `/${item.toLowerCase().replace(/\s+/g, "")}` // Updated replace pattern
              }
              className={linkClasses}
              onClick={(e) => {
                handleNavClick(e, item);
                setIsOpen(false);
              }}
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
