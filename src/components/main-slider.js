import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination } from "swiper/core";

import "swiper/swiper.min.css";
import MainSliderItem from "./main-slider-item";
import "swiper/components/pagination/pagination.min.css";

import topSliderData from "../data/slider-data";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination]);

const MainSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      loop={true}
      autoplay={{
        delay: 7000,
        disableOnInteraction: false,
      }}
      className="mySwiper border-b border-gray-400 py-2"
    >
      {topSliderData.map((items) => (
        <SwiperSlide key={items.heading}>
          <MainSliderItem
            heading={items.heading}
            link={items.link}
            image={items.image}
            date={items.date}
            author={items.author}
            description={items.description}
            tags={items.tags}
            authorImage={items.authorImage}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MainSlider;
