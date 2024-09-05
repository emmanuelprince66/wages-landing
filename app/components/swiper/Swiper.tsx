// components/SwiperComponent.tsx
"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

const SwiperComponent: React.FC = () => {
  const items = [
    {
      id: 1,
      title: "Olosunde Oluwatobiloba",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    },
    {
      id: 2,
      title: "Ochigbo Emmanuel",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    },
    {
      id: 3,
      title: "Olosunde Oluwatobiloba",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    },
    {
      id: 4,
      title: "Olosunde Oluwatobiloba",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    },
    {
      id: 5,
      title: "Olosunde Oluwatobiloba",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    },
  ];

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={20} // Space between slides
        breakpoints={{
          // Configure breakpoints
          320: {
            slidesPerView: 1, // Show 1 slide on small screens (mobile)
          },
          768: {
            slidesPerView: 2.5, // Show 2.5 slides on medium screens
          },
          1024: {
            slidesPerView: 2.5, // Show 2.5 slides on large screens
          },
        }}
        // navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="border-slate-200 border bg-white rounded-lg p-3 flex_column gap-2">
              <p className="font-[400] text-[20px] flex-wrap text-start">
                {item.des}
              </p>

              <div className="flex_center gap-2 my-4">
                <Image
                  width={35}
                  height={35}
                  className="object-fit"
                  src="/users/u-1.svg"
                  alt="icn"
                />
                <p className="font-[600] text-[20px] text-primary_black ">
                  {item.title}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperComponent;
