import React from "react";
import style from "../Lk.module.css";
import History from "./history/History";
import Promocode from "../promocodies/promocode/Promocode";

const Stories = () => {

  let stories = [
    {id: 1, address: "Казань, Кремлёвская, 88", material: "Пластик, стекло, бумага", date: "25.09.2021", price: 1000},
    {id: 2, address: "Казань, Кремлёвская, 88", material: "Пластик, стекло, бумага", date: "25.09.2021", price: 1000},
    {id: 3, address: "Казань, Кремлёвская, 88", material: "Пластик, стекло, бумага", date: "25.09.2021", price: 1000},
  ]

  let storiesElements = stories
    .map((history) =>
      <History id={history.id} adress={history.address} material={history.material} date={history.date}
               price={history.price}/>);

  return (
    <div>
      <div className={style.line} style={{
        "width": "100%",
        "height": "1px",
        "background-color": "rgba(0, 0, 0, 0.12)",
        "margin-bottom": "24px"
      }}/>

      {storiesElements}
    </div>
  );
}

export default Stories;
