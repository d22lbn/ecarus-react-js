import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {Navigation} from "swiper";
import "./MySwiper.css"
import Banner from "./banner/Banner";

const MySwiper = (props) => {

  let banners = props.banners
    .map((banner) =>
      <SwiperSlide>
        <Banner title={banner.title}
                subtitle={banner.subtitle}
                btn={banner.btn}
                img={banner.img}
                background={banner.background}
        />
      </SwiperSlide>);

  return (
    <Swiper modules={[Navigation]} navigation loop={true}>
      {banners}
    </Swiper>
  );
}

export default MySwiper;
