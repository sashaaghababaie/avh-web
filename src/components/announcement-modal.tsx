"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function AnnouncementModal() {
  const [isOpen, setIsOpen] = useState(true);
  const [animation, setAnimation] = useState(false);

  // useEffect(() => {
  //   // Show modal on page load
  //   setIsOpen(true);
  // }, []);

  const handleClose = () => {
    setAnimation(!animation);
  };

  return (
    <div
      className={`fixed  w-[340px] -right-8 bottom-2 h-[100px] z-100 flex duration-300 transition-all ${
        animation
          ? "translate-x-[210px] opacity-70"
          : "translate-x-0 opacity-100"
      }`}
    >
      {/* Backdrop */}
      <div className="animate-fade-in " />

      {/* Modal Card */}
      <div className="relative rounded-tr-4xl rounded-bl-4xl rounded-md shadow-xl hover:shadow-2xl transition-all duration-300 w-full overflow-hidden animate-modal-fade-in aspect-auto">
        {/* image background */}
        <img
          src="/dubai-airshow.webp"
          alt="Dubai Airshow"
          className="absolute inset-0 w-full h-full object-cover object-center rounded-tr-calc(48px) rounded-bl-calc(48px)"
        />
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute cursor-pointer top-3 left-3 z-20 text-white hover:text-neutral-200 transition-colors bg-black/30 hover:bg-black/50 rounded-full p-1"
          aria-label="Close announcement"
        >
          <svg
            className="w-3 h-3"
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
        <div className="relative items-center z-10 text-center p-5 sm:p-6 flex justify-center h-full">
          <div className="flex justify-center items-centet">
            <img src="/DAS_LOGO.webp" alt="Dubai Airshow" className="w-30" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white mb-2 sm:mb-3 drop-shadow-lg px-2">
              {/* The Countdown Is On - Don&apos;t Miss Out! */}
              We are in Dubai Airshow
            </h2>

            <p className="text-sm  text-white drop-shadow-lg px-2 font-semibold">
              17-21 November 2025 - DWC, Dubai Airshow Site -{" "}
              <Link
                href="https://www.dubaiairshow.aero/en/home.html"
                target="_blank"
                className="text-white hover:text-neutral-200 transition-colors underline text-sm"
              >
                Learn More
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
