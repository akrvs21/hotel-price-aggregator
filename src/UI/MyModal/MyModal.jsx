import React from "react";
import cl from "./MyModal.module.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import store from "../../redux/store";

const MyModal = ({ setIsActive, isActive }) => {
  //   const { favoriteHotelList } = useSelector(
  //     (state) => state.favorites.favoriteList
  //   );
  const favoriteHotelList = store.getState().favorites.favoriteList;
  return (
    <div className={isActive ? cl.modal + " " + cl.showModal : cl.modal}>
      <div className={cl.modalContent}>
        <span onClick={() => setIsActive(!isActive)} className={cl.closeButton}>
          &times;
        </span>
        <h1 className={cl.listHeader}>Favorites</h1>
        {favoriteHotelList &&
          favoriteHotelList.map((hotel) => (
            <h4 className={cl.listItem} key={hotel.hotel_id}>
              {hotel.hotel_name}
            </h4>
          ))}
      </div>
    </div>
  );
};

export default MyModal;
