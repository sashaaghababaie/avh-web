"use client";

import { useState } from "react";
import { useInView } from "@/hooks/useInView";

export default function MobileApp() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { ref: sectionRef, isInView: sectionInView } = useInView();

  const slides = [
    {
      title: "Meet AVH App",
      description:
        "Everything you need to engage with your beloved AVH community.",
      image: "/app1.webp",
    },
    {
      title: "Connect with Community",
      description:
        "Network with other aviation professionals and stay updated with the news.",
      image: "/app2.webp",
    },
    {
      title: "Book Facilities",
      description:
        "Easily reserve lounges, conference rooms, and other facilities through our intuitive mobile app.",
      image: "/app3.webp",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      ref={sectionRef}
      id="app"
      className="py-12 sm:py-16 lg:py-20 bg-neutral-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-semibold text-black text-center mb-12 md:mb-16 animate-on-scroll ${
            sectionInView ? "visible" : ""
          }`}
          style={{ transitionDelay: sectionInView ? "0.1s" : "0s" }}
        >
          AVH&apos;s Mobile App
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
          {/* Images Section */}
          <div
            className={`flex-1 relative animate-on-scroll ${
              sectionInView ? "visible" : ""
            }`}
            style={{ transitionDelay: sectionInView ? "0.3s" : "0s" }}
          >
            <div className="relative w-full sm:w-96 md:w-[500px] mx-auto">
              {/* Image Container */}
              <div
                className={`w-full sm:w-96 md:w-[500px] aspect-square rounded-3xl overflow-hidden shadow-lg`}
              >
                <div className="w-full h-full flex items-center justify-center text-white text-4xl">
                  <img
                    className="object-cover w-full h-full"
                    src={slides[currentSlide].image}
                  />
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 rounded-full hover:bg-white shadow-lg  p-2 sm:p-3 transition-all z-10"
                aria-label="Previous slide"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 sm:p-3 transition-all z-10"
                aria-label="Next slide"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Slide Indicators */}
              <div className="flex justify-center gap-2 mt-4">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide ? "bg-brand w-8" : "bg-neutral-300"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div
            className={`flex-1 animate-on-scroll ${
              sectionInView ? "visible" : ""
            }`}
            style={{ transitionDelay: sectionInView ? "0.5s" : "0s" }}
          >
            <div className="text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black mb-4">
                {slides[currentSlide].title}
              </h3>
              <p className="text-lg sm:text-xl text-neutral-700 leading-relaxed">
                {slides[currentSlide].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const slides = [];
