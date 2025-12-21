import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavItem } from "./NavItem";
import Logo from "../Images/madridLogo.png";

export default function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    { id: 1, path: "/", text: "HOME" },
    { id: 2, path: "/tours", text: "TOURS" },
    { id: 3, path: "/bookings", text: "BOOKINGS" },
    { id: 4, path: "/contacts", text: "CONTACTS" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-black/ backdrop-blur shadow-[0_12px_30px_rgba(0,0,0,0.45)] border-b border-main/70 mb-8 md:mb-16 lg:mb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src={Logo}
              alt="Madrid Tours Logo"
              className="h-8 md:h-10 lg:h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <ul className="flex items-center gap-6 lg:gap-10">
              {links.map((link) => (
                <li key={link.id}>
                  <NavItem
                    link={link.path}
                    text={link.text}
                    active={link.id === props.activeId}
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:text-main hover:bg-green-900/30 focus:outline-none focus:ring-2 focus:ring-main transition-colors"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            {/* Hamburger icon */}
            <svg
              className={`${isOpen ? "hidden" : "block"} w-6 h-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            {/* Close icon */}
            <svg
              className={`${isOpen ? "block" : "hidden"} w-6 h-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        id="mobile-menu"
      >
        <div className="px-4 pt-2 pb-4 space-y-2">
          {links.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block py-3 px-4 rounded-lg text-lg font-second transition-colors ${
                link.id === props.activeId
                  ? "bg-main text-black font-bold"
                  : "text-white hover:bg-green-700 hover:text-main"
              }`}
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}