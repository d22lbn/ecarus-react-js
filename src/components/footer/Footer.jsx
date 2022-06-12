import React from "react";
import style from "./Footer.module.css"

const Footer = (props) => {
  return (
    <footer className={style.footer}>
      <div className={style.footer__inner}>
        <div className={style.footer__information}>
          <img src={props.icons.email}/>
          <span>{props.state.email}</span>
        </div>
        <div className={style.footer__information}>
          <img src={props.icons.phone}/>
          <span>{props.state.phone}</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;