"use client";

import { useInView } from "@/hooks/useInView";
const handleMapClick = () => {
  window.open(
    "https://www.google.com/maps/d/u/0/viewer?mid=1_TJh-tep9pC6NZzM_xL8sSFLnKi5KoY&femb=1&ll=35.77612593847331%2C51.11202426987306&z=10",
    "_blank"
  );
};
const MapSection = () => {
  const { ref: sectionRef, isInView: sectionInView } = useInView();
  return (
    <section
      ref={sectionRef}
      id="aviation-community"
      className="pt-12 sm:pt-16 lg:pt-20 bg-brand/90"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-semibold text-white text-center mb-12 animate-on-scroll ${
            sectionInView ? "visible" : ""
          }`}
          style={{ transitionDelay: sectionInView ? "0.1s" : "0s" }}
        >
          Aviation Community Map
        </h2>
        <p
          className={`text-lg sm:text-xl text-neutral-100 text-center mb-12 md:mb-12 max-w-2xl mx-auto animate-on-scroll ${
            sectionInView ? "visible" : ""
          }`}
          style={{ transitionDelay: sectionInView ? "0.1s" : "0s" }}
        >
          The <strong>Aviation Community (AVC)</strong> is a network for
          professionals, enthusiasts, and learners connected through shared
          aviation interests and activities around key urban hubs, such as
          airports, training centers, and public spaces. AVC fosters
          connections, education, and innovation within the city.
        </p>
      </div>
      <div
        className={`w-full bg-neutral-200 overflow-hidden animate-on-scroll ${
          sectionInView ? "visible" : ""
        }`}
        style={{ transitionDelay: sectionInView ? "0.1s" : "0s" }}
      >
        <div className="flex justify-center items-center">
          <div className="relative w-full">
            <div
              className="z-10 absolute w-full h-16 flex"
              style={{ backgroundColor: "#2e312f" }}
            >
              <div className="flex items-center">
                <p className="pl-3 text-white">
                  Click the button to view the map in a larger size and display
                  more details.
                </p>
                <button
                  className="bg-brand text-white rounded-tr-xl rounded-bl-xl px-4 py-2 whitespace-nowrap mr-3 rounded-sm ml-3 cursor-pointer hover:bg-brand/80 transition-all duration-150 ease-in-out"
                  onClick={handleMapClick}
                >
                  View Larger
                </button>
              </div>
            </div>

            <iframe
              src="https://www.google.com/maps/d/embed?mid=1_TJh-tep9pC6NZzM_xL8sSFLnKi5KoY&ehbc=2E312F"
              width="100%"
              height="500"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
