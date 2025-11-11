"use client";

import { useInView } from "@/hooks/useInView";
import { ImUserTie } from "react-icons/im";
import { FaAward, FaHubspot } from "react-icons/fa";
import { BsPersonHeart } from "react-icons/bs";
import { MdFestival } from "react-icons/md";

export default function ServicesSection() {
  const { ref: sectionRef, isInView: sectionInView } = useInView();

  const services = [
    {
      title: "Joy Gliding",
      subtitle: "Events & Entertainment",
      description:
        "Hosting public and private aviation events, festivals, themed cinema, flight shows, and brand events",
      icon: <MdFestival />,
      imageUrl: "/joy-gliding.webp",
    },
    {
      title: "Aviation EDC",
      subtitle: "Community-based activities",
      description:
        "Holding events that involve interested communities, students, modelers, pilots, or residents of aviation neighborhoods",
      icon: <FaHubspot />,
      imageUrl: "/aviation-edc.webp",
    },
    {
      title: "Self Aviator",
      subtitle: "Products of Belonging, Participation & Interaction",
      description:
        "Interactive experiences and products creating a sense of 'belonging' in the place (personal flight passports, NFTs, membership badges, team workshops, and skill challenges)",
      icon: <BsPersonHeart />,
      imageUrl: "/self-aviator.webp",
    },
    {
      title: "Certiflight",
      subtitle: "Experience-Based Technical & Specialized Services",
      description:
        "Basic flight training, introduction to airplanes, simulator workshops, model repair, educational tours for schools and universities",
      icon: <FaAward />,
      imageUrl: "/certiflight.webp",
    },
    {
      title: "Aero style",
      subtitle: "Creativity and Lifestyle Products in Aviation",
      description:
        "Cultural-Lifestyle Activities: Product design, aviation-inspired fashion, music, food experiences, and designer brands",
      icon: <ImUserTie />,
      imageUrl: "/aero-style.webp",
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-12 sm:py-16 lg:py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-semibold text-black text-center mb-12 md:mb-16 animate-on-scroll ${
            sectionInView ? "visible" : ""
          }`}
          style={{ transitionDelay: sectionInView ? "0.1s" : "0s" }}
        >
          AVH Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              // className={`bg-linear-to-b p-px from-brand to-neutral-50 rounded-3xl shadow-md overflow-hidden hover:shadow-lg transition-shadow animate-on-scroll ${
              className={`border border-neutral-50 hover:border rounded-tr-4xl rounded-bl-4xl hover:border-brand shadow-md overflow-hidden hover:shadow-lg transition-all animate-on-scroll duration-200 ${
                sectionInView ? "visible" : ""
              }`}
              style={{
                transitionDelay: sectionInView ? `${0.3 + index * 0.1}s` : "0s",
              }}
            >
              {/* Image */}
              <div className="bg-white  h-full overflow-hidden flex flex-col">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />

                {/* Content */}
                <div className="p-6 pt-8">
                  <div className="flex gap-1.5">
                    <span className="items-center text-3xl text-brand">
                      {service.icon}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-semibold text-black mb-3">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-neutral-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
