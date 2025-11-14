"use client";

import Head from "next/head";

export default function HeroSection() {
  return (
    <>
      <Head>
        {/* Landscape */}
        {/* <link
          rel="preload"
          as="image"
          href="/imgs/hero-landscape.jpg"
          imagesrcset="/imgs/hero-landscape.jpg 1x, /imgs/hero-landscape@2x.jpg 2x"
          media="(orientation: landscape)"
        /> */}
        <link
          rel="preload"
          as="image"
          href="/imgs/hero-landscape.webp"
          media="(orientation: landscape)"
        />

        {/* Portrait */}
        <link
          rel="preload"
          as="image"
          href="/imgs/hero-vertical.webp"
          media="(orientation: portrait) and (max-width: 1024px)"
        />
      </Head>

      <section className="relative w-full min-h-svh flex items-start justify-center overflow-hidden pt-24">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <picture>
            {/* Portrait condition */}
            <source
              srcSet="/imgs/hero-vertical.webp"
              media="(orientation: portrait) and (max-width: 1024px)"
            />

            {/* Landscape fallback */}
            <img
              src="/imgs/hero-landscape.webp"
              alt="Hero Background"
              className="absolute inset-0 w-full h-full object-cover object-bottom"
            />
          </picture>
          {/* Overlay */}
          <div className="absolute inset-0 bg-white/5"></div>
        </div>

        {/* Content */}
        <div className="relative md:mt-16 mt-[30%] z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
    </>
  );
}
