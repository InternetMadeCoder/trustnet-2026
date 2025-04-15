import React, { useState, useEffect } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative h-[30vh] sm:h-[45vh] flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-50 to-orange-100">
        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-48 h-48 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 translate-y-4 sm:translate-y-8">
        <h1
          className={`text-3xl sm:text-5xl md:text-7xl font-extrabold text-gray-800 mb-2 sm:mb-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Call for Papers
        </h1>
        <p
          className={`text-base sm:text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto font-light tracking-wide transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Submit your research and be part of advancing trusted networks
        </p>
      </div>
    </div>
  );
};

export default Hero;
