import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-[#051036] text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center">
          <img src="/path-to-logo.png" alt="logo" className="h-8 w-8 mr-2" />
          <span className="text-xl font-bold">BTravel</span>
        </div>

        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex space-x-4">
            <Link to="/bbtravel/" className="hover:text-blue-300">
              Home
            </Link>
            <Link to="#" className="hover:text-blue-300">
              Categories
            </Link>
            <Link to="#" className="hover:text-blue-300">
              Destinations
            </Link>
            <Link to="#" className="hover:text-blue-300">
              Blog
            </Link>
            <Link to="#" className="hover:text-blue-300">
              Pages
            </Link>
            <Link to="#" className="hover:text-blue-300">
              Dashboard
            </Link>
            <Link to="#" className="hover:text-blue-300">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <select className="bg-transparent text-white outline-none">
              <option>USD</option>
              <option>EUR</option>
            </select>
            <select className="bg-transparent text-white outline-none">
              <option>United States</option>
              <option>Russia</option>
            </select>
            <button className="border border-white px-4 py-1 rounded hover:bg-blue-700">
              Become An Expert
            </button>
            <Link
              to="/login"
              className="border border-white px-4 py-1 rounded hover:bg-blue-700"
            >
              Sign In / Register
            </Link>
          </div>

          <button
            className="md:hidden hover:text-blue-300 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav className="md:hidden bg-[#051036] text-white shadow-md">
          <div className="px-6 py-4 space-y-2">
            <Link to="/bbtravel/" className="block hover:text-blue-300">
              Home
            </Link>
            <Link to="#" className="block hover:text-blue-300">
              Categories
            </Link>
            <Link to="#" className="block hover:text-blue-300">
              Destinations
            </Link>
            <Link to="#" className="block hover:text-blue-300">
              Blog
            </Link>
            <Link to="#" className="block hover:text-blue-300">
              Pages
            </Link>
            <Link to="#" className="block hover:text-blue-300">
              Dashboard
            </Link>
            <Link to="#" className="block hover:text-blue-300">
              Contact
            </Link>

            <Link
              to="/login"
              className="block text-center border border-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Sign In / Register
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
