import React from "react";
import style from "./Profile.module.css"
import ava from "./res/ava.png"

const Profile = () => {
  return (
    <div className={style.profile}>
      <div className={style.profile__ava}>
        <img src={ava}/>
      </div>
      <h3>Алексей Петрович</h3>
      <span>+7 (917) 888 88 88</span>
      <span>ivanov@gmail.com</span>
      <button>Редактировать</button>
    </div>
  );
}

export default Profile;
