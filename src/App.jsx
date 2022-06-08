import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/pages/main/Main";
import Lk from "./components/pages/lk/Lk";
import Footer from "./components/footer/Footer";
import ava from "../src/components/header/res/ava.jpg"

const App = () => {
  return (
    <div className="wrapper">
      <div>
        <Header isAuthorized={true}
                geo={"Казань"}
                balance={12000}
                name={"Алексей"}
                ava={ava}/>
        {/*<Main/>*/}
        <Lk/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
