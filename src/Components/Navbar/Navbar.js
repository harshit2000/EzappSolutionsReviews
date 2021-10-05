import React from "react";
import logo from "../Images/Ezapplogo.png";
import Burger from "./Burger";
import "./Navbar.css";
function Navbar() {
  return (
    <nav>
      <button className="nav-brand">
        <img className="logo" src={logo} alt="" />
        <span className="nav-span">REVIEWS</span>
      </button>
      <Burger />
    </nav>
  );
}

export default Navbar;
