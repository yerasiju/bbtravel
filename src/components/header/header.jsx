import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center">
          <img
            src="/path-to-logo.png"
            alt="Btravel logo"
            className="h-8 w-8 mr-2"
          />
          <span className="text-xl font-bold">BTravel</span>
        </div>

        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex space-x-4">
            <Link to="/bbtravel/" className="text-gray-700 hover:text-blue-500">
              Home
            </Link>
            <Link to="#" className="text-gray-700 hover:text-blue-500">
              Categories
            </Link>
            <Link to="#" className="text-gray-700 hover:text-blue-500">
              Destinations
            </Link>
            <Link to="#" className="text-gray-700 hover:text-blue-500">
              Blog
            </Link>
            <Link to="#" className="text-gray-700 hover:text-blue-500">
              Pages
            </Link>
            <Link to="#" className="text-gray-700 hover:text-blue-500">
              Dashboard
            </Link>
            <Link to="#" className="text-gray-700 hover:text-blue-500">
              Contact
            </Link>
          </nav>

          <button
            className="md:hidden text-gray-700 hover:text-blue-500 focus:outline-none"
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

          <Link
            to="/login"
            className="hidden md:block px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-100"
          >
            Sign In / Register
          </Link>
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <div className="px-6 py-4 space-y-2">
            <Link
              to="/bbtravel/"
              className="block text-gray-700 hover:text-blue-500"
            >
              Home
            </Link>
            <Link to="#" className="block text-gray-700 hover:text-blue-500">
              Categories
            </Link>
            <Link to="#" className="block text-gray-700 hover:text-blue-500">
              Destinations
            </Link>
            <Link to="#" className="block text-gray-700 hover:text-blue-500">
              Blog
            </Link>
            <Link to="#" className="block text-gray-700 hover:text-blue-500">
              Pages
            </Link>
            <Link to="#" className="block text-gray-700 hover:text-blue-500">
              Dashboard
            </Link>
            <Link to="#" className="block text-gray-700 hover:text-blue-500">
              Contact
            </Link>
            <Link
              to="/login"
              className="block px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-100"
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
