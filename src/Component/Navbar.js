import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavItem } from "./NavItem";
import Logo from '../Images/madridLogo.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-black grid sm:grid-cols-2 mb-20">
      <div className="container-sm mx-auto flex items-center justify-between py-4">
        <Link to="/" className="text-white text-xl font-bold">
          <img src={Logo} alt="Logo" className="w-25"></img>
        </Link>
        <button
        onClick={toggleMenu} 
        data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center sm:hidden text-white" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
        </button>
      </div>
        <div className={`sm:flex sm:flex-grow sm:items-center sm:justify-end ${isOpen ? 'block' : 'hidden'}`} id="navbar-default">
          <ul className={`justify-center items-center gap-[45px] ${isOpen ? 'block' : 'inline-flex'}`}>
            <NavItem text='HOME' link='/'/>
            <NavItem text='TOURS' link='/tours'/>
            <NavItem text='CONTACTS' link='/contacts'/>
          </ul>
        </div>
    </div>
  );
}
