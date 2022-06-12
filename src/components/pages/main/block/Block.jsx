import React from "react";
import style from "./Block.module.css"

const Block = (props) => {
  return (
    <div className={style.block}>
      <div className={style.block__information}>
        <div>
          <h3>{props.title}</h3>
          <span>{props.subtitle}</span>
        </div>
        <button>
          <img src={props.icons.arrow_block}/>
        </button>
      </div>
      <div className={style.block__img}>
        <img src={props.img}/>
      </div>
    </div>
  );
}

export default Block;
