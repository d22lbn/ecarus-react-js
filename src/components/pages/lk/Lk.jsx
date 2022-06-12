import React from "react";
import style from "./Lk.module.css"
import Profile from "./profile/Profile";
import {NavLink} from "react-router-dom";
import Promocodies from "./promocodies/Promocodies";
import Stories from "./stories/Stories";

// let isPromocodies = true;

const Lk = (props) => {

  let promocodies = React.createRef();
  let stories = React.createRef();

  let showPromocodies = () => {
    promocodies.current.display = 'none'
  }

  let showStories = () => {
    promocodies.current.display = 'none'
  }

  return (
    <main className={style.main}>
      <h1>Личный кабинет</h1>
      <div className={style.main__inner}>
        <Profile ava={props.userData.ava}
                 name={props.userData.name + ' ' + props.userData.surname}
                 phone={props.userData.phone}
                 email={props.userData.email}/>
        <div className={style.information}>
          <div className={style.categories}>
            <NavLink onClick={showPromocodies} to="/account/promocodies">Промокоды</NavLink>
            <NavLink onClick={showStories} to="/account/stories">История</NavLink>
          </div>


          <Promocodies promocodies={props.state.promocodies} ref={promocodies}/>
          <Stories stories={props.state.stories} ref={stories}/>


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
