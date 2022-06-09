import React from "react";
import style from "./NavMobile.module.css"
import geo from "./res/geo.svg"
import ava from "./res/ava.svg";
import coin from "./res/coin.svg";

const NavMobile = (props) => {
  return (
    <div className={style.nav__mobile}>
      <div className={style.nav__mobile__inner}>

        <div className={style.account}>
          <div className={style.ava}>
            <img src={ava}/>
          </div>
          <div className={style.information}>
            <span>Алексей Мачихин</span>
            <div className={style.balance}>
              <img src={coin}/>
              <span>1000</span>
            </div>
          </div>
        </div>

        <div className={style.nav}>
          <a href="#">Главная</a>
          <a href="#">Пункты сбора</a>
          <a href="#">ЭкоМаркет</a>
          <a href="#">О сервисе</a>
        </div>

        <div className={style.geo}>
          <img src={geo}/>
          <span>Казань</span>
        </div>

      </div>
    </div>
  );
}

export default NavMobile;