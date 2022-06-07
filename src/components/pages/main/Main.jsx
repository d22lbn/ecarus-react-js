import React from "react";
import MySwiper from "./MySwiper";
import style from "./Main.module.css"
import Block from "./Block";

const Main = () => {
  return (
    <main className={style.main}>
      <div className={style.main__inner}>
        <MySwiper/>
        <div className={style.blocks}>
          <Block/>
          <Block/>
        </div>
      </div>
    </main>
  );
}

export default Main;
