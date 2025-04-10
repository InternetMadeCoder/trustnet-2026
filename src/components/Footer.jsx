import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#2B2B2B]">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left Section - Adjusted alignment */}
          <div className="md:self-center md:pb-8">
            <h2 className="text-white text-2xl md:text-3xl font-bold tracking-wide">
              TrustNet - 2026
            </h2>
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-center md:items-end text-gray-300">
            <div className="text-sm space-y-3 mt-2">
              <p className="text-white font-bold text-base">CONTACT US:</p>

              <div className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 mt-0.5 flex-shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <p className="text-gray-400">
                  Manipal University Jaipur
                  <br />
                  Dehmi Kalan, Off Jaipur-Ajmer Expressway,
                  <br />
                  Jaipur, Rajasthan – 303007
                </p>
              </div>

              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 flex-shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <a
                  href="mailto:amit.garg@jaipur.manipal.edu"
                  className="text-gray-400 hover:text-gray-200 transition-colors"
                >
                  amit.garg@jaipur.manipal.edu
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-4 pt-3">
          <p className="text-gray-400 text-xs text-center">
            © 2026 TrustNet. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
