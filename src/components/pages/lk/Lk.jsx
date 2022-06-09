import React from "react";
import style from "./Lk.module.css"
import Profile from "./Profile";
import Promocode from "./Promocode";
import History from "./History";
import ava from "../../header/res/ava.jpg"
import {NavLink} from "react-router-dom";

let isPromocodies = true;

const Lk = () => {
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
            <NavLink to="#">Промокоды</NavLink>
            <a href="#">История</a>
          </div>
          <div className={style.promocodies} style={{display: !isPromocodies ? "none" : ""}}>
            <Promocode isActive={true}
                       price={1000}
                       date={"25.09.2021"}
                       link={"https://www.adidas.ru/tolstovka-future-icons-doubleknit/HA1417.html"}/>
            <Promocode isActive={false}
                       price={100}
                       date={"25.09.2021"}
                       link={"https://www.adidas.ru/tolstovka-future-icons-doubleknit/HA1417.html"}/>
            <Promocode isActive={false}
                       price={400}
                       date={"25.09.2021"}
                       link={"https://www.adidas.ru/tolstovka-future-icons-doubleknit/HA1417.html"}/>
          </div>
          <div className={style.stories} style={{display: isPromocodies ? "none" : ""}}>
            <div className={style.line}/>
            <History adress={"Казань, Кремлёвская, 88"}
                     material={"Пластик, стекло, бумага"}
                     date={"25.09.2021"}
                     price={1000}/>
            <History adress={"Казань, проспект Победы, 141"}
                     material={"Пластик, стекло, бумага"}
                     date={"25.09.2021"}
                     price={900}/>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Lk;
