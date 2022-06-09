import React from "react";
import Promocode from "./promocode/Promocode";

const Promocodies = (props) => {
  let promocodiesElements = props.promocodies
    .map((promocode) =>
      <Promocode id={promocode.id} isActive={promocode.isActive} price={promocode.price} date={promocode.date}
                 link={promocode.link}/>);

  return (
    <div>
      {promocodiesElements}
    </div>
  );
}

export default Promocodies;
