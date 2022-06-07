import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/pages/main/Main";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
