import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "../../components";
import "./MainApp.scss";
import Home from "../Home";

const MainApp = () => {
  return (

    <div className="main-app-wrapper">
      <Header />
      <div className="content-wrapper">
        <Home />
        <Outlet />
      </div>
      <Footer />
    </div>
    
  );
};

export default MainApp;
