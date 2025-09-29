"use client";
import "./slider.css";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export default function Slider() {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  const image = ["/images/nike1.png", "/images/nike2.png", "/images/nike3.png"];
  return (
    <div className="relative  w-full  mx-auto">
      <Swiper
        style={
          {
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          } as React.CSSProperties
        }
        loop={true}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mb-4"
      >
        {image.map((src, i) => (
          <SwiperSlide key={i} className="relative">
            <img
              src={src}
              alt={`slide ${i}`}
              className="w-full h-150 object-cover rounded-4xl"
            />
            <div className="absolute top-48 left-0 -translate-y-1/2  -translate-x-31 bg-black text-white -rotate-90 px-4 rounded-b-md">
              <h1 className="text-white  text-lg tracking-widest ">Nike product of the year </h1>
            </div>
            <div className="absolute bottom-4 left-4  text-white p-4 w-90 ">
              <h3 className="text-white font-bold text-5xl block w-auto mb-2">
                NIKE AIR MAX
              </h3>
              <p className="mb-2">Nike introducing the new air max for everyone's comfort</p>
              <button className="bg-[#4A69E2] p-3 rounded-md hover:bg-gray-700 ">
                Shop now
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute bottom-2 right-2 h-[500px] w-[160px]">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={3}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="h-full"
          direction="vertical"
        >
          {image.map((src, i) => (
            <SwiperSlide key={i}>
              <img
                src={src}
                alt={`thumbs ${i}`}
                className="w-[160px] h-[160px] object-cover rounded-4xl cursor-pointer     "
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
