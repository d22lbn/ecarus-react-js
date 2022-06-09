import React from "react";
import style from "./Header.module.css"
import logo from "./res/logo.svg"
import geo from "./res/geo.svg"
import coin from "./res/coin.svg"
import login from "./res/login.svg"
import {NavLink} from "react-router-dom";

const setActive = ({isActive})=>isActive ? style.active__link : ' ';

const Header = (props) => {
  return (
    <header className={style.header}>
      <div className={style.header__inner}>
        <div>
          <div className={style.header__logo}>
            <img src={logo} alt=""/>
          </div>
          <nav className={style.header__nav}>
            <NavLink to={"/main"} className={setActive}>Главная</NavLink>
            <NavLink to={"/collection_points"} className={setActive}>Пункты сбора</NavLink>
            <NavLink to={"/eco_market"} className={setActive}>ЭкоМаркет</NavLink>
            <NavLink to={"/service"} className={setActive}>О сервисе</NavLink>
          </nav>
        </div>
        <div className={style.header__configuration}>
          <div className={style.geo}>
            <NavLink to={"#"}>
              <img src={geo} alt=""/>
              <span>{props.geo}</span>
            </NavLink>
          </div>
          <div className={style.balance} style={{"display": (!props.isAuthorized ? "none" : "flex")}}>
            <img src={coin} alt=""/>
            <span>{props.balance}</span>
          </div>
          <div className={style.account}>
            <NavLink to={"/account"}>
              <img className={style.ava} src={!props.isAuthorized ? login : props.ava} alt=""/>
              <span>{!props.isAuthorized ? "Войти" : props.name}</span>
            </NavLink>
          </div>
          <div className={style.nav__mobile}>
            <NavLink to={"/nav_mobile"}>
              <span/>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;