import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/pages/main/Main";
import Lk from "./components/pages/lk/Lk";
import Footer from "./components/footer/Footer";
import ava from "../src/components/header/res/ava.jpg"
import NavMobile from "./components/header/NavMobile";
import {Route, Routes} from "react-router-dom";
import LogIn from "./components/authorization/LogIn";
import EcoMarket from "./components/pages/ecomarket/EcoMarket";
import CollectionPoints from "./components/pages/collection_points/CollectionPoints";
import Service from "./components/pages/service/Service";

const App = (props) => {
  return (
    <div className="wrapper">
      <div>
        {/*<LogIn title={'Вход'} it1={'Телефон'} it2={'Пароль'}/>*/}
        <Header isAuthorized={true}
                geo={"Казань"}
                balance={560000}
                name={"Алексей"}
                ava={ava}/>
        <div className="body__main">
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/nav_mobile/*" element={<NavMobile/>}/>
            <Route path="/account/*"
                   element={<Lk state={props.state.lkPage}/>}/>
            <Route path={"/eco_market"} element={<EcoMarket/>}/>
            <Route path={"/collection_points"} element={<CollectionPoints/>}/>
            <Route path={"/service"} element={<Service/>}/>
          </Routes>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
