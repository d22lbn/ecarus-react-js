import React from "react";
import MySwiper from "./myswiper/MySwiper";
import style from "./Main.module.css"
import Block from "./block/Block";
import banner1 from "./res/banner1.png";

import block1 from "./res/block1.png"
import block2 from "./res/block2.png"

const Main = () => {
  return (
    <main className={style.main}>
      <div className={style.main__inner}>
        <MySwiper/>
        <div className={style.blocks}>
          <Block title={"Пункты сбора"}
                 subtitle={"Посмотри, где в твоем городе можно сдать вторсырье на переработку"}
                 img={block1}
          />
          <Block title={"ЭкоМаркет"}
                 subtitle={"Используй заработанные экокоины для покупки товаров из переработанных материалов "}
                 img={block2}
          />
        </div>
      </div>
    </main>
  );
}

export default Main;
