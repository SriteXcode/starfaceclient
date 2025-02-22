import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Collection from "../assets/Api/Collectionapi";
import Pagesapi from "../assets/Api/Pagesapi";
import Elementapi from "../assets/Api/Elementsapi";
import { useAuth } from "../Store/auth";
import starlogo from "../Collection_img/starfacelogo.png";

function Navbar() {
  const { isLoggedIn } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Toggle dropdown function
  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  // Active link style
  const activeLinkStyle = ({ isActive }) => ({
    color: isActive ? '#3ab7ed' : '',
    fontSize: isActive ? '1.1rem' : '1rem',
    fontWeight: isActive ? 'bold' : 'normal'
  });

  return (
    <>
      <header className="bg-gray-900 shadow-lg fixed w-full top-0 z-50 h-16 sm:h-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <NavLink
                to="/"
                className="text-xl sm:text-2xl font-bold text-white hover:text-rose-500 transition-colors"
                style={activeLinkStyle}
              >
                <img src={starlogo} alt="Logo" className="h-12 w-auto" />
              </NavLink>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex">
              <ul className="flex items-center space-x-1">
                {/* Home Dropdown */}
                <div className="relative group">
                  <li className="hover:bg-gray-800 rounded-md">
                    <NavLink
                      to="/"
                      className={`flex items-center gap-1 px-3 py-2 text-gray-300 hover:text-white`}
                      style={activeLinkStyle}
                    >
                      Home
                      <svg
                        className="w-4 h-4 transition-transform group-hover:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </NavLink>
                  </li>
                  <div className="absolute left-0 hidden group-hover:block bg-gray-800 shadow-lg rounded-md min-w-[200px] max-h-[400px] overflow-y-auto">
                    <ul className="py-2">
                      {Collection.map((curElem, index) => (
                        <li key={index} className="hover:bg-gray-700">
                          <NavLink
                            to={curElem.link}
                            className="block px-4 py-2 text-sm text-gray-300 hover:text-white"
                            style={activeLinkStyle}
                          >
                            {curElem.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Pages Dropdown */}
                <div className="relative group mx-2">
                  <li className="hover:bg-gray-800 px-3 py-2 rounded-md">
                    <NavLink
                      to="/pages"
                      className="flex items-center gap-1 text-gray-300 hover:text-white"
                      style={activeLinkStyle}
                    >
                      Pages
                      <svg
                        className="w-4 h-4 transition-transform group-hover:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </NavLink>
                  </li>
                  <div className="absolute left-0 hidden group-hover:block bg-gray-800 shadow-lg z-50 rounded-md min-w-[200px] max-h-[400px] overflow-y-auto mt-1">
                    <ul className="py-2">
                      {Pagesapi.map((curElem, index) => (
                        <li key={index} className="px-4 py-2 hover:bg-gray-700">
                          <NavLink
                            to={curElem.path}
                            className="block text-gray-300 hover:text-white"
                            style={activeLinkStyle}
                          >
                            {curElem.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Other Links */}
                <li className="hover:bg-gray-800 px-3 py-2 rounded-md">
                  <NavLink
                    to="/portfolio"
                    className="block text-gray-300 hover:text-white"
                    style={activeLinkStyle}
                  >
                    Portfolio
                  </NavLink>
                </li>
                <li className="hover:bg-gray-800 px-3 py-2 rounded-md">
                  <NavLink
                    to="/login"
                    className="block text-gray-300 hover:text-white"
                    style={activeLinkStyle}
                  >
                    Login
                  </NavLink>
                </li>

                {/* Auth Links */}
                {isLoggedIn ? (
                  <li className="hover:bg-gray-800 px-3 py-2 rounded-md">
                    <NavLink
                      to="/logout"
                      className="block text-gray-300 hover:text-white"
                      style={activeLinkStyle}
                    >
                      Logout
                    </NavLink>
                  </li>
                ) : (
                  <>
                    <li className="mr-10 hover:bg-gray-800 px-3 py-2 rounded-md">
                      <NavLink
                        to="/register"
                        className="block text-gray-300 hover:text-white"
                        style={activeLinkStyle}
                      >
                        Register
                      </NavLink>
                    </li>
                  </>
                )}
              </ul>
            </nav>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
              isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            <div
              className={`fixed right-0 top-0 h-full w-[80%] max-w-sm bg-gray-900 transform transition-transform duration-300 overflow-y-auto ${
                isMenuOpen ? "translate-x-0" : "translate-x-full"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-gray-900 border-b px-4 py-3 flex justify-between items-center">
                <span className="font-semibold text-gray-300">Menu</span>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-md text-gray-500 hover:text-gray-300 hover:bg-gray-800"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="py-4">
                {/* Mobile Home Link with dropdown */}
                <div className="space-y-1">
                  <div
                    className="px-4 py-2.5 text-base font-medium text-gray-300 flex items-center justify-between cursor-pointer"
                    onClick={() => toggleDropdown("home")}
                  >
                    Home
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === "home" ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                  <div
                    className={`${
                      activeDropdown === "home" ? "block" : "hidden"
                    }`}
                  >
                    {Collection.map((item, index) => (
                      <NavLink
                        key={index}
                        to={item.link}
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 pl-8"
                        style={activeLinkStyle}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>

                {/* Mobile Pages Link with dropdown */}
                <div className="space-y-1 mt-4">
                  <div
                    className="px-4 py-2.5 text-base font-medium text-gray-300 flex items-center justify-between cursor-pointer"
                    onClick={() => toggleDropdown("pages")}
                  >
                    Pages
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === "pages" ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                  <div
                    className={`${
                      activeDropdown === "pages" ? "block" : "hidden"
                    }`}
                  >
                    {Pagesapi.map((item, index) => (
                      <NavLink
                        key={index}
                        to={item.path}
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 pl-8"
                        style={activeLinkStyle}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>

                {/* Mobile Elements Link with dropdown */}
                <div className="space-y-1 mt-4">
                  <div
                    className="px-4 py-2.5 text-base font-medium text-gray-300 flex items-center justify-between cursor-pointer"
                    onClick={() => toggleDropdown("elements")}
                  >
                    Elements
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === "elements" ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                  <div
                    className={`${
                      activeDropdown === "elements" ? "block" : "hidden"
                    }`}
                  >
                    {Elementapi.map((category) => (
                      <div key={category.category} className="ml-4 space-y-1">
                        <div className="px-3 py-2 text-sm font-medium text-gray-300">
                          {category.category}
                        </div>
                        {category.data.map((item) => (
                          <NavLink
                            key={item.id}
                            to={item.path}
                            className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 pl-8"
                            style={activeLinkStyle}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item.name}
                          </NavLink>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile Vision and Portfolio Links */}
                <NavLink
                  to="/portfolio"
                  className="block px-4 py-2.5 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                  style={activeLinkStyle}
                >
                  Portfolio
                </NavLink>
                {/* Mobile Authentication Links */}
                {isLoggedIn ? (
                  <NavLink
                    to="/logout"
                    className="block px-4 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                    style={activeLinkStyle}
                  >
                    Logout
                  </NavLink>
                ) : (
                  <>
                    <NavLink
                      to="/login"
                      className="block px-4 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                      style={activeLinkStyle}
                    >
                      Login
                    </NavLink>
                    <NavLink
                      to="/register"
                      className="block px-4 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                      style={activeLinkStyle}
                    >
                      Registration
                    </NavLink>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="h-16 sm:h-20"></div>
    </>
  );
}

export default Navbar;
