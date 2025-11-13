"use client";

import { BiSolidCameraMovie, BiSolidDish } from "react-icons/bi";
import { BsHeadsetVr } from "react-icons/bs";
import {
  PiAirplayFill,
  PiGameController,
  PiGameControllerBold,
} from "react-icons/pi";
import { MdChair, MdCoffee, MdDoorFront } from "react-icons/md";
import { RiPresentationFill } from "react-icons/ri";
import { useInView } from "@/hooks/useInView";

export default function FacilitiesSection() {
  const { ref: sectionRef, isInView: sectionInView } = useInView();

  const facilities = [
    {
      title: "Café",
      description:
        "A cozy aviation-themed café serving beverages and light meals; also acts as a social interaction hub.",
      icon: <MdCoffee />,
      imageUrl: "/imgs/cafe.jpg",
    },
    {
      title: "Restaurant",
      description:
        "Full-service dining area offering aviation-inspired menus and themed culinary experiences.",
      icon: <BiSolidDish />,

      imageUrl: "/imgs/restaurant.jpg",
    },
    {
      title: "Meeting Room",
      description:
        "Shared by different sections: 2 tables for the restaurant, 2 for the café, and 1 for the simulator lounge. Designed for business gatherings, private sessions, and group discussions",
      icon: <RiPresentationFill />,
      imageUrl: "/imgs/meeting.jpg",
    },
    {
      title: "Simulation Lounge",
      description:
        "Equipped with 3 high-end flight simulators, providing immersive aviation experiences and training sessions.",
      icon: <BsHeadsetVr />,
      imageUrl: "/imgs/flight-simulator.webp",
    },
    {
      title: "Event Space",
      description:
        "Multi-purpose space for festivals, brand ceremonies, workshops, and both public and private aviation events.",
      icon: <PiAirplayFill />,
      imageUrl: "/imgs/event-space.jpg",
    },
    {
      title: "Cinematheque",
      description:
        "Dedicated to themed aviation films and educational or entertainment screenings.",

      icon: <BiSolidCameraMovie />,
      imageUrl: "/imgs/cinematheque.webp",
    },
    {
      title: "Game Station",
      description:
        "Digital entertainment zone featuring aviation-related games and interactive experiences for youth and families.",
      icon: <PiGameControllerBold />,
      imageUrl: "/imgs/game-station.jpg",
    },
  ];

  return (
    <section
      id="facilities"
      ref={sectionRef}
      className="py-12 sm:py-16 lg:py-20 bg-linear-to-br to-brand/30 from-neutral-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-semibold text-black text-center mb-12 md:mb-16 animate-on-scroll ${
            sectionInView ? "visible" : ""
          }`}
          // style={{ transitionDelay: sectionInView ? "0.1s" : "0s" }}
        >
          AVH Facilities & Spaces
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {facilities.map((facility, index) => (
            <div
              key={index}
              // className={`bg-linear-to-b p-px from-brand to-neutral-50 rounded-3xl shadow-md overflow-hidden hover:shadow-lg transition-shadow animate-on-scroll ${
              className={`border hover:border rounded-tr-4xl rounded-bl-4xl border-brand hover:shadow-md overflow-hidden shadow-none transition-all animate-on-scroll duration-200 ${
                sectionInView ? "visible" : ""
              }`}
              style={{
                transitionDelay: sectionInView ? "0.1s" : "0s",
              }}
            >
              {/* Image */}
              <div className="bg-white h-full overflow-hidden flex flex-col">
                <img
                  src={facility.imageUrl}
                  alt={facility.title}
                  className="w-full aspect-square object-cover"
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
