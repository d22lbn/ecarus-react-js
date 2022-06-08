import React from "react";
import style from "./Promocode.module.css"
import card from "./res/card.png"

const Promocode = () => {
  return (
    <div className={style.promocode}>
      <div className={style.card}>
        <img src={card}/>
        <span>1000 ₽</span>
      </div>
      <div className={style.information}>
        <div className={style.item}>
          <span className={style.first}>Дата создания:</span>
          <span>25.09.2021</span>
        </div>
        <div className={style.item}>
          <span className={style.first}>Ссылка на товар:</span>
          <span className={style.link}>https://www.adidas.ru/tolstovka-future-icons-doubleknit/HA1417.html</span>
        </div>
      </div>
      <button>Показать qr-код</button>
    </div>
  );
}

export default Promocode;
