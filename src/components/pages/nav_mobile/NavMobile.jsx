import React from "react";
import style from "./NavMobile.module.css"
import {NavLink} from "react-router-dom";

const NavMobile = (props) => {
  return (
    <div className={style.nav__mobile}>
      <div className={style.nav__mobile__inner}>

        <NavLink to={"/account"} className={style.account}>
          <div className={style.ava}>
            <img src={props.userData.ava}/>
          </div>
          <div className={style.information}>
            <span>{props.userData.name} {props.userData.surname}</span>
            <div className={style.information__data}>
              <div className={style.balance}>
                <img src={props.icons.coin}/>
                <span>{props.userData.balance}</span>
              </div>
              <div className={style.geo}>
                <img src={props.icons.geo}/>
                <span>{props.userData.city}</span>
              </div>
            </div>
          </div>
        </NavLink>

        <div className={style.nav}>
          <NavLink to={"/"}>Главная</NavLink>
          <NavLink to={"/collection_points"}>Пункты сбора</NavLink>
          <NavLink to={"/eco_market"}>ЭкоМаркет</NavLink>
          <NavLink to={"/service"}>О сервисе</NavLink>
        </div>
      </div>
    </div>
  );
}

export default NavMobile;