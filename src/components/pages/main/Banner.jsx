import React from "react";
import style from "./Banner.module.css"
import banner from "./res/banner1.png"

const Banner = () => {
  return (
    <div className={style.banner}>
      <div className={style.banner__information}>
        <div>
          <h3>Сделаем мир чище</h3>
          <span>Сдай макулатуру или старую одежду и получи скидку на покупку товаров из переработанных материалов</span>
        </div>
        <button>Условия сервиса</button>
      </div>
      <div className={style.banner__img}>
        <img src={banner}/>
      </div>
    </div>
  );
}

export default Banner;
