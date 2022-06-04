import React from "react";
import "../../styles/App.css";
import logo from "../../assets/logo.png";

const MyNavbar = () => {
  return (
    <div className="favorite-container">
      <img src={logo} alt="" />
      <p>Favorites</p>
      <div className="favorite"></div>
    </div>
  );
};

export default MyNavbar;
