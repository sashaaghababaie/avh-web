"use client";

import { useWindowSize } from "@/hooks/useWindowSize";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function AnnouncementModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldShow, setShouldShow] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const dubaiRef = useRef<HTMLDivElement>(null);

  const { width, height } = useWindowSize();

  useEffect(() => {
    if (shouldShow) {
      setIsOpen(true);
    }
  }, [shouldShow]);
  useEffect(() => {
    let ticking = false;

    const updateLogo = () => {
      const el = containerRef.current;
      const dubai = dubaiRef.current;

      if (!el || !dubai) return;

      if (width > height || width > 1024) {
        dubai.style.transform = `translateY(${0}vh) `;
        return;
      }

      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const progress = Math.min(
        Math.max(0, ((-1 * rect.top) / windowHeight) * 2),
        1
      );

      dubai.style.transform = `translateY(${-25 + progress * 25}vh) `;

      setShouldShow(true);
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateLogo();
          ticking = false;
        });
        ticking = true;
      }
    };

    updateLogo();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [width, height]);

  const handleClose = () => setIsOpen(!isOpen);

  return (
    <div className={`${shouldShow ? "visible" : "hidden"} relative`}>
      <div
        ref={containerRef}
        className="absolute top-full left-0 h-px w-full"
      ></div>
      <div
        onClick={() => {
          if (!isOpen) {
            setIsOpen(true);
          }
        }}
        className={`fixed duration-300 transition-all bottom-2 w-[340px] -right-8 z-100 flex ${
          !isOpen
            ? "translate-x-[210px] hover:opacity-100 opacity-70 h-[50px] cursor-pointer"
            : "h-[100px] translate-x-0 opacity-100 cursor-default"
        }`}
      >
        {/* Modal Card */}
        <div ref={dubaiRef} className="absolute top-0 left-0 w-full h-full">
          <div className="relative h-full rounded-tr-4xl rounded-bl-4xl rounded-md shadow-xl hover:shadow-2xl transition-all duration-300 w-full overflow-hidden animate-modal-fade-in aspect-auto">
            {/* image background */}
            <img
              src="/dubai-airshow.webp"
              alt="Dubai Airshow"
              className="absolute inset-0 w-full h-full object-cover object-center rounded-tr-calc(48px) rounded-bl-calc(48px)"
            />
            {/* Close Button */}
            {isOpen && (
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
            )}

            {/* Content */}
            <div className="relative items-center z-10 text-center p-5 sm:p-6 flex justify-center h-full">
              <div className="flex justify-center items-centet">
                <img
                  src="/DAS_LOGO.webp"
                  alt="Dubai Airshow"
                  className="w-30"
                />
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
      </div>
    </div>
  );
}
