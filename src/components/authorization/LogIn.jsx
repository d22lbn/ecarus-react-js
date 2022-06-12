import React from "react";
import style from "./LogIn.module.css"
import {NavLink} from "react-router-dom";

const LogIn = () => {
  return (
    <div className={style.login__wrapper}>
      <div className={style.login}>
        <div className={style.login__inner}>
          <div className={style.title}>
            <h3>Вход</h3>
            <NavLink to={''}/>
          </div>
          <input placeholder={'Телефон'}/>
          <input placeholder={'Пароль'}/>
          <button>Войти</button>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
