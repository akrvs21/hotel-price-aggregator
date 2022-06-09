import React from "react";
import "../../styles/App.css";
import logo from "../../assets/logo.png";

const MyNavbar = ({ isActive, setIsActive }) => {
  const showModal = () => {
    setIsActive(!isActive);
  };
  return (
    <div className="favorite-container">
      <img src={logo} alt="" />
      <div onClick={() => showModal()} className="favorite-inner-container">
        <p>Favorites</p>
        <div className="favorite"></div>
      </div>
    </div>
  );
};

export default MyNavbar;
