import React from "react";
import style from "./Product.module.css"
import coin from "../lk/res/coin.svg";


const Product = (props) => {
  return (
    <div className={style.product}>
      <div className={style.product__img}>
        <img src={props.img}/>
        <span>{props.brand}</span>
      </div>
      <span className={style.product__name}>{props.name}</span>
      <span className={style.product__description}>{props.description}</span>
      <div className={style.product__price}>
        <img src={coin}/>
        <span>{props.price}</span>
      </div>
    </div>
  )
}

export default Product;