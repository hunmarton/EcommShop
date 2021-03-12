import React from "react";
import { ImgWrapper } from "../styles/Header";
import Navbar from "./Navbar";
import Topbar from "./Topbar";

function Header() {
  return (
    <>
      <Topbar />
      <ImgWrapper />
      <Navbar />
    </>
  );
}

export default Header;
