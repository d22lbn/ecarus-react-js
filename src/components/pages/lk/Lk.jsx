import React from "react";
import style from "./Lk.module.css"
import Profile from "./Profile";
import Promocode from "./Promocode";
import History from "./History";

const Lk = () => {
  return (
    <main className={style.main}>
      <div className={style.main__inner}>
        <Profile/>
        <div className={style.information}>
          <div className={style.categories}>
            <a href="#">Промокоды</a>
            <a href="#">История</a>
          </div>
          {/*<div className={style.promocodies}>*/}
          {/*  <Promocode/>*/}
          {/*  <Promocode/>*/}
          {/*  <Promocode/>*/}
          {/*  <Promocode/>*/}
          {/*  <Promocode/>*/}
          {/*</div>*/}
          <div className={style.history}>
            <History/>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Lk;
