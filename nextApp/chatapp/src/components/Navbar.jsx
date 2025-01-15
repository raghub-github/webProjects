"use client";
import React, { useState } from "react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="text-white text-2xl font-bold tracking-wide hover:text-gray-200 transition-colors"
            >
              ChatApp
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/features"
              className="text-white text-lg hover:text-gray-200 transition-colors"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="text-white text-lg hover:text-gray-200 transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/about"
              className="text-white text-lg hover:text-gray-200 transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-white text-lg hover:text-gray-200 transition-colors"
            >
              Contact
            </Link>
            <Link href="/">
              <UserButton showName />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white hover:t3ext-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isOpen ? (
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
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-blue-500 to-purple-500 px-4 pt-4 pb-6 space-y-2">
          <Link
            href="/features"
            className="block text-white hover:bg-blue-700 rounded-md px-4 py-2 text-lg font-medium transition"
          >
            Features
          </Link>
          <Link
            href="/pricing"
            className="block text-white hover:bg-blue-700 rounded-md px-4 py-2 text-lg font-medium transition"
          >
            Pricing
          </Link>
          <Link
            href="/about"
            className="block text-white hover:bg-blue-700 rounded-md px-4 py-2 text-lg font-medium transition"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block text-white hover:bg-blue-700 rounded-md px-4 py-2 text-lg font-medium transition"
          >
            Contact
          </Link>
          <Link href="/">
            <UserButton showName />
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
