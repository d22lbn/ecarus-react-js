import React from "react";
import style from "./Banner.module.css"
import banner from "../../res/banner1.png"

const Banner = (props) => {
  return (
    <div className={style.banner} style={{"background": props.background}}>
      <div className={style.banner__information}>
        <div>
          <h3>{props.title}</h3>
          <span>{props.subtitle}</span>
        </div>
        <button>{props.btn}</button>
      </div>
      <div className={style.banner__img}>
        <img src={props.img}/>
      </div>
    </div>
  );
}

export default Banner;
