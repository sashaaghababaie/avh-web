"use client";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Navigation } from "swiper/modules";
import { NavigationOptions } from "swiper/types";

export const ImageSwiper = ({
  images,
  options = {
    navigation: {
      nextEl: ".custom-next",
      prevEl: ".custom-prev",
    },
  },
  setCurrentSlide,
}: {
  images: string[];
  options?:
    | {
        centeredSlides?: boolean;
        slidesPerView: "auto" | number;
        spaceBetween?: number;
        navigation?: NavigationOptions | boolean;
      }
    | {};
  setCurrentSlide?: (index: number) => void;
}) => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => setOpacity(1), []);

  return (
    <div style={{ opacity }} className="h-full w-full transition-opacity">
      <Swiper
        onSlideChange={(e) => {
          setCurrentSlide?.(e.activeIndex);
        }}
        // navigation={{
        //   nextEl: ".custom-next",
        //   prevEl: ".custom-prev",
        // }}
        // centeredSlides

        slidesPerView={1}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        className="h-full relative w-full"
        {...(options ? options : {})}
      >
        {images.map((image, i) => (
          <SwiperSlide
            key={i}
            className="flex w-fit items-center justify-center"
          >
            <img
              src={image}
              alt={`image-${i}`}
              className="block w-full h-full object-cover object-center"
            />
          </SwiperSlide>
        ))}
        {options && "navigation" in options && options.navigation && (
          <>
            <button
              className="custom-prev absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 rounded-full hover:bg-white shadow-lg cursor-pointer p-2 sm:p-3 transition-all z-20"
              aria-label="Previous slide"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              className="custom-next absolute right-2 z-20  sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 sm:p-3 transition-all cursor-pointer"
              aria-label="Next slide"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </>
        )}
      </Swiper>
    </div>
  );
};
