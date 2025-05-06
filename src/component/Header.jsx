import React from "react";
import brand from "../assets/brand.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import coupon1 from "../assets/coupon1.jpg";
import coupon2 from "../assets/coupon2.jpg";
import coupon3 from "../assets/coupon3.jpg";

const couponSlides = [
  {
    image: coupon1,
    title: "20% OFF",
    description: "Use code WELCOME20 on your first order.",
  },
  {
    image: coupon2,
    title: "Free Delivery",
    description: "On all orders above $50 this weekend.",
  },
  {
    image: coupon3,
    title: "Buy 1 Get 1",
    description: "Pizza party! Grab the deal now.",
  },
];

const Header = () => {
  return (
    <div className=" flex flex-col gap-0 w-full">
      <div className="w-full h-14 flex justify-between items-center border-b-border bg-bgShade   border-b border-solid">
        <div className="flex justify-center items-center w-14 h-full bg-black">
          <img
            className="bg-cover w-full h-auto bg-center"
            src={brand}
            alt="Outlet"
          />
        </div>
        <h1 className="text-textDark text-center font-sfDisplay text-base font-semibold leading-normal">
          T1 - 4 Pax
        </h1>
        <div className="flex justify-center items-center w-14 h-full cursor-pointer border border-border border-solid ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-0.5 -0.5 16 16"
            className="stroke-textDark fill-textDark"
            strokeLinecap="round"
            strokeLinejoin="round"
            id="Search--Streamline-Tabler"
            height={30}
            width={30}
          >
            <desc>{"Search Streamline Icon: https://streamlinehq.com"}</desc>
            <path
              d="M1.875 6.25a4.375 4.375 0 1 0 8.75 0 4.375 4.375 0 1 0 -8.75 0"
              strokeWidth={1}
            />
            <path d="m13.125 13.125 -3.75 -3.75" strokeWidth={1} />
          </svg>
        </div>
      </div>
      <Swiper
        effect="fade"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        allowTouchMove={false}
        modules={[Autoplay, Pagination, EffectFade]}
        slidesPerView={1}
        className="w-full px-4 relative"
      >
        {couponSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className=" h-56 py-4 px-4 flex justify-center items-end bg-cover bg-center text-white"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="flex flex-col w-full  gap-0 justify-between items-start bg-banner-gradient">
                <h1 className="font-sfDisplay text-2xl font-semibold leading-normal">
                  {slide.title}
                </h1>
                <p className="font-sfText text-base font-medium leading-normal">
                  {slide.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        ,
      </Swiper>
    </div>
  );
};

export default Header;
