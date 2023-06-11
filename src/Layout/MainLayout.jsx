import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <NavBar></NavBar>

      <Outlet />

      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
