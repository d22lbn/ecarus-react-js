import React from "react";
import style from "./Header.module.css"
import logo from "./res/logo.svg"
import geo from "./res/geo.svg"
import coin from "./res/coin.svg"
import ava from "./res/ava.svg"

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.header__inner}>
        <div>
          <div className={style.header__logo}>
            <img src={logo} alt=""/>
          </div>
          <nav className={style.header__nav}>
            <a href="#">Главная</a>
            <a href="#">Пункты сбора</a>
            <a href="#">ЭкоМаркет</a>
            <a href="#">О сервисе</a>
          </nav>
        </div>
        <div className={style.header__configuration}>
          <div>
            <img src={geo} alt=""/>
              <span>Казань</span>
          </div>
          <div className={style.balance}>
            <img src={coin} alt=""/>
              <span>1000</span>
          </div>
          <div>
            <img src={ava} alt=""/>
              <span>Алексей</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;