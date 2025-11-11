"use client";

import { useInView } from "@/hooks/useInView";

export default function FirstSection() {
  const { ref: sectionRef, isInView: sectionInView } = useInView();

  return (
    <section ref={sectionRef} className="py-12 sm-py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-semibold text-black text-center mb-12 md:mb-16 animate-on-scroll ${
            sectionInView ? "visible" : ""
          }`}
          style={{ transitionDelay: sectionInView ? "0.1s" : "0s" }}
        >
          What is AVH?
        </h2>

        {/* First Row: Text Left, Image Right */}
        <div className="mb-16 md:mb-24">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div
              className={`flex-1 order-2 md:order-1 animate-on-scroll ${
                sectionInView ? "visible" : ""
              }`}
              style={{ transitionDelay: sectionInView ? "0.3s" : "0s" }}
            >
              <h2 className="text-xl md:text-2xl font-semibold text-neutral-700 mb-4">
                Experience & Engagement
              </h2>
              <p className="text-lg sm:text-xl text-neutral-700 leading-relaxed">
                <span className="font-bold">AV</span>
                <span className="font-bold text-brand">H </span>
                is a comprehensive platform that brings together aviation
                enthusiasts, professionals, and brands to connect, learn, and
                share experiences. The center features entertainment,
                educational, experiential, exhibition, and social spaces that
                provide all aspects of the aviation experience in one unified
                platform.
              </p>
            </div>
            <div
              className={`flex-1 order-1 md:order-2 animate-on-scroll ${
                sectionInView ? "visible" : ""
              }`}
              style={{ transitionDelay: sectionInView ? "0.5s" : "0s" }}
            >
              <div className="w-full h-64 sm:h-80 md:h-96 bg-neutral-200 rounded-3xl overflow-hidden">
                <div className="w-full h-full bg-linear-to-br from-brand to-brand/60 flex items-center justify-center text-white text-2xl">
                  <img
                    src="/01.webp"
                    alt="AVH Interior-01"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row: Image Left, Text Right */}
        <div>
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div
              className={`flex-1 order-1 animate-on-scroll ${
                sectionInView ? "visible" : ""
              }`}
              style={{ transitionDelay: sectionInView ? "0.7s" : "0s" }}
            >
              <div className="w-full h-64 sm:h-80 md:h-96 bg-neutral-200 rounded-3xl overflow-hidden">
                <div className="w-full h-full bg-linear-to-br from-neutral-600 to-neutral-800 flex items-center justify-center text-white text-2xl">
                  <img
                    src="/02.webp"
                    alt="AVH Interior-02"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div
              className={`flex-1 order-2 animate-on-scroll ${
                sectionInView ? "visible" : ""
              }`}
              style={{ transitionDelay: sectionInView ? "0.9s" : "0s" }}
            >
              <h2 className="text-xl md:text-2xl font-semibold text-neutral-700 mb-4">
                Connection & Socialization
              </h2>
              <p className="text-left text-base sm:text-lg md:text-xl text-neutral-600 leading-relaxed">
                Our commitment extends beyond facilities. We foster a vibrant
                community of pilots, aircraft owners, and aviation
                professionals. AVH is where your aviation journey takes flight.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
