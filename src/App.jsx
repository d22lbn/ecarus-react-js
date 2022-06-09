import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/pages/main/Main";
import Lk from "./components/pages/lk/Lk";
import Footer from "./components/footer/Footer";
import ava from "../src/components/header/res/ava.jpg"
import NavMobile from "./components/header/NavMobile";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <div>
          <Header isAuthorized={true}
                  geo={"Казань"}
                  balance={12000}
                  name={"Алексей"}
                  ava={ava}/>

          <Routes>
            <Route path="/main" element={<Main/>}/>
            <Route path="/nav_mobile" element={<NavMobile/>}/>
            <Route path="/account" element={<Lk/>}/>
          </Routes>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
