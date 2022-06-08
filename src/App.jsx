import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/pages/main/Main";
import Lk from "./components/pages/lk/Lk"
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="wrapper">
      <div>
        <Header/>
        {/*<Main/>*/}
        <Lk/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
