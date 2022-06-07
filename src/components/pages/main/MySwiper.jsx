import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {Navigation} from "swiper";
import "./MySwiper.css"
import Banner from "./Banner";

const MySwiper = () => {
  return (
    <Swiper modules={[Navigation]} navigation loop={true}>
      <SwiperSlide><Banner/></SwiperSlide>
      <SwiperSlide><Banner/></SwiperSlide>
      <SwiperSlide><Banner/></SwiperSlide>
    </Swiper>
  );
}

export default MySwiper;
