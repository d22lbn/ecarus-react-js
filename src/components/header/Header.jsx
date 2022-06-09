import React from "react";
import style from "./Header.module.css"
import logo from "./res/logo.svg"
import geo from "./res/geo.svg"
import coin from "./res/coin.svg"
import login from "./res/login.svg"
import NavMobile from "./NavMobile";

const Header = (props) => {
  return (
    <header className={style.header}>
      <div className={style.header__inner}>
        <div>
          <div className={style.header__logo}>
            <img src={logo} alt=""/>
          </div>
          <nav className={style.header__nav}>
            <a href={"/main"}>Главная</a>
            <a href={"/collection_points"}>Пункты сбора</a>
            <a href={"/eco_market"}>ЭкоМаркет</a>
            <a href={"/service"}>О сервисе</a>
          </nav>
        </div>
        <div className={style.header__configuration}>
          <div className={style.geo}>
            <a href={"#"}>
              <img src={geo} alt=""/>
              <span>{props.geo}</span>
            </a>
          </div>
          <div className={style.balance} style={{"display": (!props.isAuthorized ? "none" : "flex")}}>
            <img src={coin} alt=""/>
            <span>{props.balance}</span>
          </div>
          <div className={style.account}>
            <a href={"/account"}>
              <img className={style.ava} src={!props.isAuthorized ? login : props.ava} alt=""/>
              <span>{!props.isAuthorized ? "Войти" : props.name}</span>
            </a>
          </div>
          <div className={style.nav__mobile}>
            <a href={"/nav_mobile"}>
              <span/>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;