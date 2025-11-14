"use client";

import { BiSolidCameraMovie, BiSolidDish } from "react-icons/bi";
import { BsHeadsetVr } from "react-icons/bs";
import { PiAirplayFill, PiGameControllerBold } from "react-icons/pi";
import { MdCoffee, MdMeetingRoom } from "react-icons/md";
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
      imageUrl: "/plans/cafe.webp",
      className:
        "scale-150 w-full relative -top-1/4 -left-[39%] aspect-square object-cover",
      overlays: [true, true, true, true],
    },
    {
      title: "Restaurant",
      description:
        "Full-service dining area offering aviation-inspired menus and themed culinary experiences.",
      icon: <BiSolidDish />,
      className:
        "scale-150 w-full relative -top-1/4 left-[42%] aspect-square object-cover",
      imageUrl: "/plans/restaurant.webp",
      overlays: [true, true, true, true],
    },
    {
      title: "Meeting Room",
      description:
        "Shared by different sections: 2 tables for the restaurant, 2 for the café, and 1 for the simulator lounge. Designed for business gatherings, private sessions, and group discussions",
      icon: <MdMeetingRoom />,
      imageUrl: "/plans/meeting.webp",
      className:
        "scale-90 w-full relative top-0 left-0 aspect-square object-cover",
      overlays: [false, false, true, false],
    },
    {
      title: "Pavillion",
      description:
        "Dedicated space for showcasing aerospace products and technologies, model-making activities, airplane owner gatherings, and specialized exhibitions and events.",
      icon: <RiPresentationFill />,
      imageUrl: "/plans/pavillion.webp",
      className:
        "scale-90 w-full relative top-0 left-0 aspect-square object-cover",
      overlays: [false, false, true, false],
    },
    {
      title: "Simulation Lounge",
      description:
        "Equipped with 3 high-end flight simulators, providing immersive aviation experiences and training sessions.",
      icon: <BsHeadsetVr />,
      imageUrl: "/plans/simulator.webp",
      className:
        "scale-150 w-full relative -top-1/6 -left-[39%] aspect-square object-cover",
      overlays: [false, false, true, false],
    },
    {
      title: "Event Space",
      description:
        "Multi-purpose space for festivals, brand ceremonies, workshops, and both public and private aviation events.",
      icon: <PiAirplayFill />,
      imageUrl: "/plans/event.webp",
      className:
        "scale-150 w-full relative -top-1/67 left-[42%] aspect-square object-cover",
      overlays: [true, true, true, true],
    },
    {
      title: "Cinematheque",
      description:
        "Dedicated to themed aviation films and educational or entertainment screenings.",
      className:
        "relative scale-200 left-2/3 w-full aspect-square object-cover",
      icon: <BiSolidCameraMovie />,
      imageUrl: "/plans/cinematheque.webp",
      overlays: [true, true, true, true],
    },
    {
      title: "Game Station",
      description:
        "Digital entertainment zone featuring aviation-related games and interactive experiences for youth and families.",
      icon: <PiGameControllerBold />,
      className:
        "relative scale-200 -left-2/3 w-full aspect-square object-cover",
      imageUrl: "/plans/game.webp",
      overlays: [true, true, true, true],
    },
  ];

  return (
    <section
      id="facilities"
      ref={sectionRef}
      className="py-12 sm:py-16 lg:py-20 bg-linear-to-br to-brand from-neutral-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-semibold text-black text-center mb-12 md:mb-16 animate-on-scroll ${
            sectionInView ? "visible" : ""
          }`}
          // style={{ transitionDelay: sectionInView ? "0.1s" : "0s" }}
        >
          Facilities
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
                <div className="relative w-full overflow-hidden">
                  {facility.overlays[0] && (
                    <div className="absolute z-10 top-0 left-0 h-1/4 w-full bg-linear-to-b from-white" />
                  )}
                  {facility.overlays[1] && (
                    <div className="absolute z-10 right-0 top-0 h-full w-1/4 bg-linear-to-l from-white" />
                  )}
                  {facility.overlays[2] && (
                    <div className="absolute z-10 bottom-0 left-0 h-1/3 w-full bg-linear-to-t from-white" />
                  )}
                  {facility.overlays[3] && (
                    <div className="absolute z-10 left-0 top-0 h-full w-1/4 bg-linear-to-r from-white" />
                  )}
                  <img
                    src={facility.imageUrl}
                    alt={facility.title}
                    className={` ${facility.className}`}
                  />
                </div>

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
