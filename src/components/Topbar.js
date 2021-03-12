import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { TopWrapper } from "../styles/Topbar";
function Topbar() {
  return (
    <TopWrapper className="container-fluid">
      <FaShoppingCart className="cart" />
    </TopWrapper>
  );
}

export default Topbar;
