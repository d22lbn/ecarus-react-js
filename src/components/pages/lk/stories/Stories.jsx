import React from "react";
import style from "../Lk.module.css";
import History from "./history/History";

const Stories = (props) => {

  let storiesElements = props.stories
    .map((history) =>
      <History id={history.id} address={history.address} material={history.material} date={history.date}
               price={history.price} icons={props.icons}/>);

  return (
    <div>
      <div className={style.line} style={{
        "width": "100%",
        "height": "1px",
        "background-color": "rgba(0, 0, 0, 0.12)",
        "margin-bottom": "24px",
        "margin-top": "3px"
      }}/>

      {storiesElements}
    </div>
  );
}

export default Stories;
