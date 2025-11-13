"use client";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Navigation } from "swiper/modules";

export const ImageSwiper = ({
  images,
  setCurrentSlide,
}: {
  images: string[];
  setCurrentSlide: (index: number) => void;
}) => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => setOpacity(1), []);

  return (
    <div style={{ opacity }} className="h-full w-full transition-opacity">
      <Swiper
        onSlideChange={(e) => {
          setCurrentSlide(e.activeIndex);
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        // centeredSlides
        slidesPerView={1}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        className="h-full relative w-full"
      >
        {images.map((image, i) => (
          <SwiperSlide
            key={i}
            className="border-none flex w-auto items-center justify-center"
          >
            <img
              src={image}
              alt={`image-${i}`}
              className="block border-none h-full w-auto object-cover"
            />
          </SwiperSlide>
        ))}
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
      </Swiper>
    </div>
  );
};

//   <button
//     onClick={prevSlide}
//     className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 rounded-full hover:bg-white shadow-lg  p-2 sm:p-3 transition-all z-10"
//     aria-label="Previous slide"
//   >
//     <svg
//       className="w-5 h-5 sm:w-6 sm:h-6 text-black"
//       fill="none"
//       stroke="currentColor"
//       viewBox="0 0 24 24"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={2}
//         d="M15 19l-7-7 7-7"
//       />
//     </svg>
//   </button>
//   <button
//     onClick={nextSlide}
//     className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 sm:p-3 transition-all z-10"
//     aria-label="Next slide"
//   >
//     <svg
//       className="w-5 h-5 sm:w-6 sm:h-6 text-black"
//       fill="none"
//       stroke="currentColor"
//       viewBox="0 0 24 24"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={2}
//         d="M9 5l7 7-7 7"
//       />
//     </svg>
//   </button>
