import React from "react";
import style from "./History.module.css"
import coin from "../../res/coin.svg"

const History = (props) => {
  return (
    <div className={style.history}>
      <div className={style.information}>
        <div className={style.item}>
          <span className={style.first}>Адрес</span>
          <span>{props.address}</span>
        </div>
        <div className={style.item}>
          <span className={style.first}>Материал</span>
          <span>{props.material}</span>
        </div>
        <div className={style.item}>
          <span className={style.first}>Дата</span>
          <span>{props.date}</span>
        </div>
      </div>
      <div className={style.price}>
        <img src={coin}/>
        <span>{props.price}</span>
      </div>
    </div>
  );
}

export default History;
