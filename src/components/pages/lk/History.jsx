import React from "react";
import style from "./History.module.css"
import coin from "./res/coin.svg"

const History = () => {
  return (
    <div className={style.history}>
      <div className={style.information}>
        <div className={style.item}>
          <span className={style.first}>Адрес</span>
          <span>Казань, Кремлёвская, 88</span>
        </div>
        <div className={style.item}>
          <span className={style.first}>Материал</span>
          <span>Пластик: 1 кг</span>
        </div>
        <div className={style.item}>
          <span className={style.first}>Дата</span>
          <span>25.09.2021</span>
        </div>
      </div>
      <div className={style.price}>
        <img src={coin}/>
        <span>1000</span>
      </div>
    </div>
  );
}

export default History;
