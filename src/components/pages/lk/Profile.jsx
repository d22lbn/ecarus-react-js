import React from "react";
import style from "./Profile.module.css"

const Profile = (props) => {
  return (
    <div className={style.profile}>
      <div className={style.profile__ava}>
        <img src={props.ava}/>
      </div>
      <h3>{props.name}</h3>
      <span>{props.phone}</span>
      <span>{props.email}</span>
      <button>Редактировать</button>
    </div>
  );
}

export default Profile;
