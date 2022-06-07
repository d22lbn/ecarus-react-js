import React from "react";
import style from "./Block.module.css"
import arrow from "./res/arrow-block.svg"
import block1 from "./res/block1.png"

const Block = () => {
  return (
    <div className={style.block}>
      <div className={style.block__information}>
        <div>
          <h3>Пункты сбора</h3>
          <span>Посмотри, где в твоем городе можно сдать вторсырье на переработку</span>
        </div>
        <button>
          <img src={arrow}/>
        </button>
      </div>
      <div className={style.block__img}>
        <img src={block1}/>
      </div>
    </div>
  );
}

export default Block;
