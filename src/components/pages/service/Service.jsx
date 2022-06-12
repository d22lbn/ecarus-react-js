import React from "react";
import style from "./Service.module.css"

const Service = (props) => {
  return (
    <main className={style.service}>
      <div className={style.service_inner}>
        <h2>Этот сайт написан с использованием ReactJs, Redux, SCSS</h2>
        <h2>Он является демонстрацией моих навыков.</h2>
      </div>
    </main>
  );
}

export default Service;