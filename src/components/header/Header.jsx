import React from "react";
import style from "./Header.module.css"
import logo from "./res/logo.svg"
import geo from "./res/geo.svg"
import coin from "./res/coin.svg"
import login from "./res/login.svg"

const Header = (props) => {
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
              <span>{props.geo}</span>
          </div>
          <div className={style.balance} style={{"display": (!props.isAuthorized ? "none" : "flex")}}>
            <img src={coin} alt=""/>
              <span>{props.balance}</span>
          </div>
          <div>
            <img className={style.ava} src={!props.isAuthorized ? login : props.ava} alt=""/>
              <span>{!props.isAuthorized ? "Войти" : props.name}</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;