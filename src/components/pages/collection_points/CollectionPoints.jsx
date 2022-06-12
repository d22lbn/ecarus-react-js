import React from "react";
import style from "./CollectionPoints.module.css"

const CollectionPoints = (props) => {
  return (
    <main className={style.collection__points}>
      <iframe src={"https://yandex.ru/map-widget/v1/-/CCUJV0FFKB"}/>
    </main>
  );
}

export default CollectionPoints;