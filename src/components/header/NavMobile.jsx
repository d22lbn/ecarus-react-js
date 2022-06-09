import React from "react";
import style from "./NavMobile.module.css"
import Account from "./Account";
import geo from "./res/geo.svg"

const NavMobile = (props) => {
  return (
    <div className={style.nav__mobile}>
      <div className={style.nav__mobile__inner}>
        <button></button>
        <Account/>
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