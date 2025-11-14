"use client";

import { useInView } from "@/hooks/useInView";
import { ImageSwiper } from "./image-swiper";

export default function FirstSection() {
  const { ref: sectionRef, isInView: sectionInView } = useInView();

  return (
    <section ref={sectionRef} className="py-12 sm-py-16 lg:py-20 bg-white">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-semibold text-black text-center mb-12 md:mb-16 animate-on-scroll ${
            sectionInView ? "visible" : ""
          }`}
          style={{ transitionDelay: sectionInView ? "0.1s" : "0s" }}
        >
          What is <span className="font-bold">AV</span>
          <span className="font-bold text-brand">H </span>?
        </h2>

        {/* First Row: Text Left, Image Right */}
        <div>
          <div className="flex flex-col w-full items-center gap-8 md:gap-12">
            <div
              className={`flex  w-full justify-center order-1 md:order-2 animate-on-scroll ${
                sectionInView ? "visible" : ""
              }`}
              style={{ transitionDelay: sectionInView ? "0.1s" : "0s" }}
            >
              {/* <h2 className="text-xl md:text-2xl font-semibold text-neutral-700 mb-4">
                Experience & Engagement
              </h2> */}
              <p className="text-base font-semibold sm:text-lg max-w-auto md:max-w-2xl text-black/70 leading-relaxed">
                {/* <span className="font-bold">AV</span>
                <span className="font-bold text-brand">H </span> */}
                The{" "}
                <span className="text-black font-bold">
                  Aviation Experience and Engagement Center{" "}
                </span>
                was created to fill a long-standing gap in Iran’s aviation
                community; the lack of a shared space for enthusiasts,
                professionals, and newcomers to connect. Previously limited to
                occasional events, the community needed a place to learn,
                engage, and grow together. This center was founded to foster
                conversation, hands-on learning, and collaboration among all
                aviation roles. It transforms interaction into culture and
                experience into knowledge, serving as both a social and
                professional hub where the future of Iranian aviation can take
                off.
              </p>
            </div>
            <div
              className={`flex-1 order-1 w-full animate-on-scroll ${
                sectionInView ? "visible" : ""
              }`}
              style={{ transitionDelay: sectionInView ? "0.2s" : "0s" }}
            >
              <div className="flex justify-center w-full md:hidden h-96">
                <ImageSwiper
                  options={{
                    slidesPerView: 1.2,
                    centeredSlides: true,
                    spaceBetween: 20,
                    navigation: false,
                  }}
                  images={[
                    "/imgs/cafe-1.webp",
                    "/imgs/lobby.webp",
                    "/imgs/cafe-2.webp",
                  ]}
                />
              </div>
              <div className="hidden md:flex w-full aspect-4/1  gap-2 bg-neutral-200 rounded-3xl overflow-hidden">
                <img
                  src="/imgs/cafe-1.webp"
                  alt="AVH Interior-01"
                  className="flex-1 object-cover"
                />
                <img
                  src="/imgs/lobby.webp"
                  alt="AVH Interior-01"
                  className="flex-1 object-cover"
                />
                <img
                  src="/imgs/cafe-2.webp"
                  alt="AVH Interior-01"
                  className="flex-1 object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Second Row: Image Left, Text Right */}
        {/* <div>
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
                    src="/01.webp"
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
        </div> */}
      </div>
    </section>
  );
}
