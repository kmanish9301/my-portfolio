import React, { useState } from "react";
import { navLinkData } from "../../Constants/index";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log("isOpen:", isOpen);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-800" id="home">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white z-10"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <p className="text-lg tracking-wider cursor-pointer text-white">
                Manish's Portfolio
              </p>
            </div>
            <div className="hidden sm:flex flex-1 items-center justify-center space-x-4">
              <ul className="flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                {navLinkData.length > 0 &&
                  navLinkData.map(({ id, title, link }) => (
                    <li
                      key={id}
                      className="text-sm sm:text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-white duration-300 z-10"
                    >
                      <Link
                        activeClass="active"
                        to={link}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                        {title}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div
        className={`absolute inset-x-0 transition transform ${
          isOpen ? "block" : "hidden"
        } sm:hidden bg-bodyColor z-50`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pb-3 pt-2 bg-gray-800 z-50">
          {navLinkData.length > 0 &&
            navLinkData.map(({ id, title, link }) => (
              <Link
                key={id}
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white hover:bg-gray-700 z-50"
                onClick={() => setIsOpen(false)}
              >
                {title}
              </Link>
            ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
