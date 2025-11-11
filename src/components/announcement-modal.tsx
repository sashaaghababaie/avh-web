"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function AnnouncementModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show modal on page load
    setIsOpen(true);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-100 flex items-end justify-end p-4"
      onClick={handleClose}
    >
      {/* Backdrop */}
      <div className="animate-fade-in" />

      {/* Modal Card */}
      <div
        className="relative rounded-tr-4xl rounded-bl-4xl rounded-md border-2 border-blue-800 shadow-xl hover:shadow-2xl transition-all duration-300 max-w-lg w-full overflow-hidden animate-modal-fade-in aspect-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* image background */}
        <img
          src="/dubai-airshow.webp"
          alt="Dubai Airshow"
          className="absolute inset-0 w-full h-full object-cover object-center rounded-tr-calc(48px) rounded-bl-calc(48px)"
        />
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 z-20 text-white hover:text-neutral-200 transition-colors bg-black/30 hover:bg-black/50 rounded-full p-1"
          aria-label="Close announcement"
        >
          <svg
            className="w-5 h-5"
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
        </button>

        {/* Content */}
        <div className="relative z-10 text-center p-5 sm:p-6 flex flex-col justify-center h-full">
          <div className="flex justify-center items-center mb-6">
            <img src="/DAS_LOGO.webp" alt="Dubai Airshow" className="w-32" />
          </div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 drop-shadow-lg px-2">
            The Countdown Is On - Don&apos;t Miss Out!
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white drop-shadow-lg px-2 font-semibold">
            17-21 November 2025 - DWC, Dubai Airshow Site
          </p>
          <div className="flex justify-center items-center">
            <Link
              href="https://www.dubaiairshow.aero/en/home.html"
              target="_blank"
              className="text-white hover:text-neutral-200 transition-colors underline mt-2"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
