import React from "react";
import style from "./Lk.module.css"
import Profile from "./profile/Profile";
import ava from "../../header/res/ava.jpg"
import {NavLink} from "react-router-dom";
import Promocodies from "./promocodies/Promocodies";
import Stories from "./stories/Stories";

// let isPromocodies = true;


const Lk = () => {


  let promocodies = [
    {id: 1, isActive: true, price: 1000, date: "25.09.2021", link: "https://www.adidas.ru/tolstovka-future-icons-doubleknit/HA1417.html"},
    {id: 2, isActive: true, price: 0, date: "25.09.2021", link: "https://www.adidas.ru/tolstovka-future-icons-doubleknit/HA1417.html"},
    {id: 3, isActive: false, price: 5000, date: "25.09.2021", link: "https://www.adidas.ru/tolstovka-future-icons-doubleknit/HA1417.html"},
    {id: 4, isActive: false, price: 1100, date: "25.09.2021", link: "https://www.adidas.ru/tolstovka-future-icons-doubleknit/HA1417.html"},
    {id: 5, isActive: false, price: 700, date: "25.09.2021", link: "https://www.adidas.ru/tolstovka-future-icons-doubleknit/HA1417.html"},
  ]


  return (
    <main className={style.main}>
      <h1>Личный кабинет</h1>
      <div className={style.main__inner}>
        <Profile ava={ava}
                 name={"Алексей Мачихин"}
                 phone={"+79274351254"}
                 email={"d22lbn@gmail.com"}/>
        <div className={style.information}>
          <div className={style.categories}>
            <NavLink to="/account/promocodies">Промокоды</NavLink>
            <NavLink to="/account/stories">История</NavLink>
          </div>

          <Promocodies promocodies={promocodies}/>
          {/*<Stories/>*/}



          {/*<div className={style.promocodies} style={{display: !isPromocodies ? "none" : ""}}>*/}
          {/*  */}
          {/*</div>*/}
          {/*<div className={style.stories} style={{display: isPromocodies ? "none" : ""}}>*/}
          {/*  */}
          {/*</div>*/}


        </div>
      </div>
    </main>
  );
}

export default Lk;
