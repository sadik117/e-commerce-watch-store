import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.tsx";
import Footer from "./Footer.tsx";

const Mainlayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-324px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Mainlayout;