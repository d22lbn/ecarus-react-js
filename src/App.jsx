import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/pages/main/Main";
import Lk from "./components/pages/lk/Lk";
import Footer from "./components/footer/Footer";
import NavMobile from "./components/pages/nav_mobile/NavMobile";
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

        <Header isAuthorized={true} userData={props.state.userData} icons={props.state.icons}/>

        <div className="body__main">
          <Routes>
            <Route path="/" element={<Main state={props.state.mainPage} icons={props.state.icons}/>}/>
            <Route path="/nav_mobile/" element={<NavMobile userData={props.state.userData} icons={props.state.icons}/>}/>
            <Route path="/account/*" element={<Lk state={props.state.lkPage} userData={props.state.userData} icons={props.state.icons}/>}/>
            <Route path={"/eco_market"} element={<EcoMarket state={props.state.ecomarketPage} icons={props.state.icons}/>}/>
            <Route path={"/collection_points"} element={<CollectionPoints icons={props.state.icons}/>}/>
            <Route path={"/service"} element={<Service/>}/>
          </Routes>
        </div>

      </div>
      <Footer state={props.state.footerInf} icons={props.state.icons}/>
    </div>
  );
}

export default App;
