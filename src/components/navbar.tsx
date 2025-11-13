"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src="/avh-logo.png" alt="Aviation Hub" className="w-14 mr-2" />
          </Link>

          {/* Nav Links */}

          <div className="hidden md:flex font-semibold space-x-8">
            <Link
              href="#services"
              className="text-neutral-800 hover:text-neutral-700 transition-colors"
            >
              Services
            </Link>
            <Link
              href="#facilities"
              className="text-neutral-800 hover:text-neutral-700 transition-colors"
            >
              Facilities
            </Link>

            <Link
              href="#membership"
              className="text-neutral-800 hover:text-neutral-700 transition-colors"
            >
              Membership
            </Link>
            <Link
              href="#app"
              className="text-neutral-800 hover:text-neutral-700 transition-colors"
            >
              App
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-neutral-800 cursor-pointer hover:text-neutral-700"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 font-semibold space-y-2 border-t border-neutral-700 mt-2 pt-2">
            <Link
              href="#services"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-black/80 hover:text-black/50 py-2"
            >
              Services
            </Link>
            <Link
              href="#facilities"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-black/80 hover:text-black/50 py-2"
            >
              Facilities
            </Link>

            <Link
              href="#services"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-black/80 hover:text-black/50 py-2"
            >
              Membership
            </Link>
            <Link
              href="#app"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-black/80 hover:text-black/50 py-2"
            >
              App
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
