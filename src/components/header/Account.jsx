import React from "react";
import style from "./Account.module.css"
import ava from "./res/ava.svg"
import coin from "./res/coin.svg"

const Account = (props) => {
  return (
    <div className={style.account}>
      <div className={style.ava}>
        <img src={ava}/>
      </div>
      <div className={style.information}>
        <span>Алексей Мачихин</span>
        <div className={style.balance}>
          <img src={coin}/>
          <span>1000</span>
        </div>
      </div>
    </div>
  );
}

export default Account;