import React from "react";
import style from "./Promocode.module.css"
import card from "../../res/card.png"

const Promocode = (props) => {
  return (
    <div className={style.promocode} style={{"justify-content": (!props.isAuthorized ? "start" : "space-between")}}>
      <div className={style.card}>
        <img src={card} style={!props.isActive ? {filter: "grayscale(100%)"} : {filter: "none"}}/>
        <span>{props.price} ₽</span>
      </div>
      <div className={style.information}>
        <div className={style.item}>
          <span className={style.first}>Дата создания:</span>
          <span>{props.date}</span>
        </div>
        <div className={style.item}>
          <span className={style.first}>Ссылка на товар:</span>
          <span className={style.link}>{props.link}</span>
        </div>
      </div>
      <button style={{"display": (!props.isActive ? "none" : "")}}>Показать qr-код</button>
    </div>
  );
}

export default Promocode;
