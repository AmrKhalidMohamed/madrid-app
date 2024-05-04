import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-black">
      <div className="container-lg mx-auto flex items-center justify-between py-4">
        <Link to="/" className="text-white text-xl font-bold">Logo</Link>
        <button className="block lg:hidden focus:outline-none">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <div className="hidden lg:flex lg:flex-grow lg:items-center lg:ml-8 lg:justify-end">
          <ul className="flex flex-col lg:flex-row lg:space-x-8">
            <li className="nav-item">
              <NavLink
                to="/"
                exact
                className="text-white font-second hover:text-gray-200 transition duration-300"
              >
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/tours"
                className="text-white hover:text-gray-200 transition duration-300"
                activeClassName="font-bold"
              >
                TOURS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contacts"
                className="text-white hover:text-gray-200 transition duration-300"
                activeClassName="font-bold"
              >
                CONTACTS
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
