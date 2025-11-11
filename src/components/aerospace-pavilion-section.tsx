"use client";

import { BiSolidCheckCircle } from "react-icons/bi";
import { useInView } from "@/hooks/useInView";

const AerospacePavilionSection = () => {
  const { ref: sectionRef, isInView: sectionInView } = useInView();
  const features = [
    {
      title: "Airplane Show",
      description: "Showing the latest airplanes and aircrafts from the world.",
    },
    {
      title: "Model Makers",
      description: "Making airplane models from scratch.",
    },
    {
      title: "Airplane Owners Club",
      description:
        "Sharing your experiences and knowledge with other airplane owners.",
    },
    {
      title: "Exhibition Hall",
      description:
        "Showing the latest airplanes and aircrafts from the world. with special exhibitions and events.",
    },
    // {
    //   title: "Meeting Rooms",
    //   description:
    //     "Having meetings and discussions with other airplane owners.",
    // },
  ];
  return (
    <section
      ref={sectionRef}
      id="pavilion"
      className="py-12 sm:py-16 lg:py-20 bg-white relative"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/aerospace-pavilion.webp')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/70"></div>
      </div>
      {/* Title and Description Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-semibold text-black text-center mb-12 md:mb-16 animate-on-scroll ${
            sectionInView ? "visible" : ""
          }`}
          style={{ transitionDelay: sectionInView ? "0.1s" : "0s" }}
        >
          Aerospace Pavilion
        </h2>
        <p
          className={`text-base sm:text-lg md:text-xl text-neutral-600 text-center mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto px-4 animate-on-scroll ${
            sectionInView ? "visible" : ""
          }`}
          style={{ transitionDelay: sectionInView ? "0.1s" : "0s" }}
        >
          The <strong>Aerospace Pavilion</strong> is a dedicated space for
          showcasing your products and services in aerospace technology and
          innovation. It features interactive exhibits, educational programs,
          and a variety of aerospace-related activities.
        </p>
      </div>
      {/* Cards Section */}
      <div
        className={`relative z-10 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-6 lg:gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-on-scroll ${
          sectionInView ? "visible" : ""
        }`}
        style={{ transitionDelay: sectionInView ? "0.1s" : "0s" }}
      >
        {features.map((feature, index) => (
          <div
            key={index}
            className={`border bg-white border-neutral-200 rounded-tr-2xl sm:rounded-tr-3xl lg:rounded-tr-4xl rounded-bl-2xl sm:rounded-bl-3xl lg:rounded-bl-4xl hover:border-brand shadow-md overflow-hidden hover:shadow-lg transition-all duration-200 animate-on-scroll ${
              sectionInView ? "visible" : ""
            }`}
            style={{
              transitionDelay: sectionInView ? `${0.3 + index * 0.1}s` : "0s",
            }}
          >
            <div className="flex gap-2 sm:gap-3 px-4 sm:px-5 md:px-6 pt-6 sm:pt-7 md:pt-8 flex-col">
              <div className="flex flex-row gap-2 sm:gap-3">
                <span className="text-2xl sm:text-3xl text-brand shrink-0">
                  <BiSolidCheckCircle />
                </span>
                <div className="flex flex-col gap-1 sm:gap-2">
                  <h3 className="text-lg sm:text-xl md:text-xl font-semibold text-black mb-2 sm:mb-3">
                    {feature.title}
                  </h3>
                </div>
              </div>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed pl-0 pb-4 sm:pb-5 md:pb-6">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AerospacePavilionSection;
