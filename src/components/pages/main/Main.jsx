import React from "react";
import style from "./Main.module.css"
import MySwiper from "./myswiper/MySwiper";
import Block from "./block/Block";

const Main = (props) => {
  let blocks = props.state.blocks
    .map((block) =>
      <Block title={block.title}
             subtitle={block.subtitle}
             img={block.img}
             icons={props.icons}
      />);

  return (
    <main className={style.main}>
      <div className={style.main__inner}>
        <MySwiper banners={props.state.banners} icons={props.icons}/>
        <div className={style.blocks}>
          {blocks}
        </div>
      </div>
    </main>
  );
}

export default Main;
