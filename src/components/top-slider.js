import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import SwiperCore, { Autoplay } from "swiper/core";

import TopSliderItem from "./top-slider-item";
import "swiper/swiper.min.css";
import topSliderData from "../data/slider-data";
import { useState, useEffect } from "react";
// install Swiper modules
SwiperCore.use([Autoplay]);
const TopSlider = () => {
  const [slidePerView, setslidePerView] = useState(3);

  useEffect((windowWidth) => {
    windowWidth = window.screen.width;
    if (windowWidth < 600) {
      setslidePerView(1);
    } else if (windowWidth > 600 && windowWidth < 800) {
      setslidePerView(2);
    }
  }, []);
  return (
    <Swiper
      slidesPerView={slidePerView}
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
