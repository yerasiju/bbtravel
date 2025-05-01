import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center">
          <img
            src="/path-to-logo.png"
            alt="GoTrip Logo"
            className="h-8 w-8 mr-2"
          />
          <span className="text-xl font-bold">GoTrip</span>
        </div>

        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="text-gray-700 hover:text-blue-500">
            Home
          </Link>
          <div className="relative">
            <button className="text-gray-700 hover:text-blue-500">
              Categories
            </button>

            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg hidden">
              <Link
                to="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Category 1
              </Link>
              <Link
                to="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Category 2
              </Link>
            </div>
          </div>
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

        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <button className="text-gray-700 hover:text-blue-500">USD</button>
            {/* Выпадающий список валют */}
            <div className="absolute left-0 mt-2 w-24 bg-white shadow-lg rounded-lg hidden">
              <Link
                to="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                USD
              </Link>
              <Link
                to="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                EUR
              </Link>
            </div>
          </div>
          <div className="relative">
            <button className="text-gray-700 hover:text-blue-500">
              United States
            </button>

            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg hidden">
              <Link
                to="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                United States
              </Link>
              <Link
                to="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                United Kingdom
              </Link>
            </div>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Become An Expert
          </button>
          <Link
            to="/login"
            className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-100"
          >
            Sign In / Register
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
