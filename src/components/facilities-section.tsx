"use client";

import { BiSolidCameraMovie, BiSolidDish } from "react-icons/bi";
import { BsHeadsetVr } from "react-icons/bs";
import { PiAirplayFill } from "react-icons/pi";
import { MdChair, MdDoorFront } from "react-icons/md";
import { RiPresentationFill } from "react-icons/ri";
import { useInView } from "@/hooks/useInView";

export default function FacilitiesSection() {
  const { ref: sectionRef, isInView: sectionInView } = useInView();

  const facilities = [
    {
      title: "Café - 100 sqm",
      description:
        "A cozy aviation-themed café serving beverages and light meals; also acts as a social interaction hub.",
      icon: <MdChair />,
      imageUrl: "/imgs/cafe.jpg",
    },
    {
      title: "Restaurant - 100 sqm",
      description:
        "Full-service dining area offering aviation-inspired menus and themed culinary experiences.",
      icon: <RiPresentationFill />,
      imageUrl: "/imgs/restaurant.jpg",
    },
    {
      title: "Meeting Room - 60 sqm",
      description:
        "Shared by different sections: 2 tables for the restaurant, 2 for the café, and 1 for the simulator lounge. Designed for business gatherings, private sessions, and group discussions",
      icon: <BiSolidDish />,
      imageUrl: "/imgs/meeting.jpg",
    },
    {
      title: "Simulation Lounge - 100 sqm",
      description:
        "Equipped with 3 high-end flight simulators, providing immersive aviation experiences and training sessions.",
      icon: <BiSolidCameraMovie />,
      imageUrl: "/imgs/flight-simulator.webp",
    },
    {
      title: "Event Space - 80 sqm",
      description:
        "Multi-purpose space for festivals, brand ceremonies, workshops, and both public and private aviation events.",
      icon: <BsHeadsetVr />,
      imageUrl: "/imgs/event-space.jpg",
    },
    {
      title: "Cinematheque - 50 sqm",
      description:
        "Dedicated to themed aviation films and educational or entertainment screenings.",
      icon: <PiAirplayFill />,
      imageUrl: "/imgs/cinematheque.webp",
    },
    {
      title: "Game Station - 60 sqm",
      description:
        "Digital entertainment zone featuring aviation-related games and interactive experiences for youth and families.",
      icon: <PiAirplayFill />,
      imageUrl: "/imgs/game-station.jpg",
    },
  ];

  return (
    <section
      id="facilities"
      ref={sectionRef}
      className="py-12 sm:py-16 lg:py-20 bg-neutral-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-semibold text-black text-center mb-12 md:mb-16 animate-on-scroll ${
            sectionInView ? "visible" : ""
          }`}
          style={{ transitionDelay: sectionInView ? "0.1s" : "0s" }}
        >
          AVH Facilities & Spaces
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {facilities.map((facility, index) => (
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
                  src={facility.imageUrl}
                  alt={facility.title}
                  className="w-full h-full object-cover"
                />

                {/* Content */}
                <div className="p-6 pt-8">
                  <div className="flex gap-1.5">
                    <span className="items-center text-3xl text-brand">
                      {facility.icon}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-semibold text-black mb-3">
                      {facility.title}
                    </h3>
                  </div>
                  <p className="text-neutral-600 leading-relaxed">
                    {facility.description}
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
