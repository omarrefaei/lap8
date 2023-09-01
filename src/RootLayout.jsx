import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
const RootLayout = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet/>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;