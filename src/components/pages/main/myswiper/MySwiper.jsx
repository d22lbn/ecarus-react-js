import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {Navigation} from "swiper";
import "./MySwiper.css"
import Banner from "./banner/Banner";

import banner1 from "../res/banner1.png"
import banner2 from "../res/banner2.png"
import banner3 from "../res/banner3.png"

const MySwiper = () => {
  return (
    <Swiper modules={[Navigation]} navigation loop={true}>
      <SwiperSlide>
        <Banner title={"Сделаем мир чище"}
                subtitle={"Сдай макулатуру или старую одежду и получи скидку на покупку товаров из переработанных материалов"}
                btn={"Условия сервиса"}
                img={banner1}
                background={"rgba(179, 237, 200, 1)"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Banner title={"А вы знали..."}
                subtitle={"что среднее время разложения пластмассовых изделий колеблется от 400 до 700 лет,  а полиэтиленовых пакетов — от 100 до 200 лет? "}
                btn={"Узнать больше"}
                img={banner2}
                background={"rgba(255, 228, 143, 1)"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Banner title={"Что с масками?"}
                subtitle={"Медицинские маски не обязательно должны становиться отходами. Их тоже можно сдать на переработку."}
                btn={"Пункты сбора масок"}
                img={banner3}
                background={"rgba(191, 240, 222, 1)"}
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default MySwiper;
