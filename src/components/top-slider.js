import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import SwiperCore, { Autoplay } from "swiper/core";

import TopSliderItem from "./top-slider-item";
import "swiper/swiper.min.css";
import topSliderData from "../data/top-slider-data";
// install Swiper modules
SwiperCore.use([Autoplay]);
const TopSlider = () => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={10}
      loop={true}
      loopFillGroupWithBlank={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      className="mySwiper py-2 border-b border-gray-400"
    >
      {topSliderData.map((items) => (
        <SwiperSlide key={items.heading}>
          <TopSliderItem
            heading={items.heading}
            link={items.link}
            image={items.image}
            date={items.date}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TopSlider;
