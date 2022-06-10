import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/pages/main/Main";
import Lk from "./components/pages/lk/Lk";
import Footer from "./components/footer/Footer";
import ava from "../src/components/header/res/ava.jpg"
import NavMobile from "./components/header/NavMobile";
import {Route, Routes} from "react-router-dom";

const App = (props) => {
  return (
    <div className="wrapper">
      <div>
        <Header isAuthorized={true}
                geo={"Казань"}
                balance={560000}
                name={"Алексей"}
                ava={ava}/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/nav_mobile/*" element={<NavMobile/>}/>
          <Route path="/account/*"
                 element={<Lk state={props.state.lkPage}/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
