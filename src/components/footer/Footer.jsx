import React from "react";
import style from "./Footer.module.css"
import mail from "./res/mail.svg"
import phone from "./res/phone.svg"

const Header = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footer__inner}>
        <div className={style.footer__information}>
          <img src={mail}/>
          <span>info@ecorus.ru</span>
        </div>
        <div className={style.footer__information}>
          <img src={phone}/>
          <span>+7 (800) 880-88-88</span>
        </div>
      </div>
    </footer>
  );
}

export default Header;