import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/madridLogo.png";

export function Footer() {
  return (
    <footer className="w-full bg-black px-4 md:px-8 py-12 mt-20 md:mt-32">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo & About */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/">
              <img src={Logo} alt="Madrid Tours Logo" className="h-10 md:h-12 w-auto mb-4" />
            </Link>
            <p className="text-gray-400 text-sm font-second leading-relaxed">
              Your trusted partner for unforgettable travel experiences across Egypt and beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white text-sm font-bold font-second mb-2">
              Quick Links
            </h3>
            <Link to="/" className="text-gray-400 text-sm font-second hover:text-main transition-colors">
              Home
            </Link>
            <Link to="/tours" className="text-gray-400 text-sm font-second hover:text-main transition-colors">
              Tours
            </Link>
            <Link to="/bookings" className="text-gray-400 text-sm font-second hover:text-main transition-colors">
              My Bookings
            </Link>
            <Link to="/contacts" className="text-gray-400 text-sm font-second hover:text-main transition-colors">
              Contact Us
            </Link>
          </div>

          {/* Tour Types */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white text-sm font-bold font-second mb-2">
              Our Tours
            </h3>
            <Link to="/tours" className="text-gray-400 text-sm font-second hover:text-main transition-colors">
              Special Offers
            </Link>
            <Link to="/tours" className="text-gray-400 text-sm font-second hover:text-main transition-colors">
              Religious Tourism
            </Link>
            <Link to="/tours" className="text-gray-400 text-sm font-second hover:text-main transition-colors">
              Foreign Tourism
            </Link>
            <Link to="/tours" className="text-gray-400 text-sm font-second hover:text-main transition-colors">
              Domestic Tourism
            </Link>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white text-sm font-bold font-second mb-2">
              Contact
            </h3>
            <a href="tel:01114934473" className="text-gray-400 text-sm font-second hover:text-main transition-colors">
              01114934473
            </a>
            <a href="mailto:info@madredtours.com" className="text-gray-400 text-sm font-second hover:text-main transition-colors">
              info@madredtours.com
            </a>
            <p className="text-gray-400 text-sm font-second">
              Nasr City, Cairo
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-main mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm font-second text-center md:text-left">
              © {new Date().getFullYear()} Madrid Tours. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a className="text-gray-500 text-sm font-second hover:text-main transition-colors">
                Privacy Policy
              </a>
              <a className="text-gray-500 text-sm font-second hover:text-main transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}