"use client";
import { useWindowSize } from "@/hooks/useWindowSize";
import { useLayoutEffect, useState } from "react";

export default function HeroSection() {
  const { width, height } = useWindowSize();

  const [src, setSrc] = useState("/imgs/hero-vertical.webp");

  useLayoutEffect(() => {
    const orientation =
      width < height && width <= 1024 ? "portrait" : "landscape";

    setSrc(
      orientation === "portrait"
        ? "/imgs/hero-vertical.webp"
        : "/imgs/hero-landscape.jpg"
    );
  }, [width, height]);

  return (
    <section className="relative w-full min-h-screen flex items-start justify-center overflow-hidden pt-24">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={src}
          alt="Hero Background"
          className="w-full h-full object-bottom object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/5"></div>
      </div>

      {/* Content */}
      <div className="relative mt-12 xl:mt-0 z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-semibold text-white mb-3 animate-slide-up-fade-in">
          Aviation Hub
          {/* <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white ml-2">
            (AVH)
          </span> */}
        </h1>
        <h2
          style={{ animationDelay: "0.2s" }}
          className="text-white/90 font-semibold text-3xl md:text-5xl animate-slide-up-fade-in mb-5"
        >
          Experience & Engagement
        </h2>
        {/* <p
          className="w-full max-w-md text-base font-medium md:text-lg text-neutral-200 sm:max-w-lg md:max-w-lg lg:max-w-2xl mx-auto animate-slide-up-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          Your premier destination for aviation excellence. Experience
          world-class facilities, premium services, and a community dedicated to
          the art of flight.
        </p> */}
      </div>
    </section>
  );
}
