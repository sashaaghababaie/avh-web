"use client";

import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import { ImageSwiper } from "./image-swiper";

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
      <div></div>
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
                className={`w-84 sm:w-96 md:w-[500px] aspect-square rounded-3xl overflow-hidden shadow-lg`}
              >
                <div className="w-full h-full  text-white text-4xl">
                  {/* <img
                    className="object-cover w-full h-full"
                    src={slides[currentSlide].image}
                  /> */}
                  <ImageSwiper
                    setCurrentSlide={setCurrentSlide}
                    images={["/app1.webp", "/app2.webp", "/app2.webp"]}
                  />
                </div>
              </div>

              {/* Navigation Arrows */}

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
