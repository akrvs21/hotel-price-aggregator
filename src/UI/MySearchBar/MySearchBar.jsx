import React, { useState } from "react";
import "../../styles/App.css";
import MyButton from "../MyButton/MyButton";
import MyInput from "../MyInput/MyInput";
import MyList from "../MyList/MyList";

const MySearchBar = ({ getHotelsInLocation, setIsLoading, setCurrentPage }) => {
  const [userInput, setuserInput] = useState("");

  return (
    <div className="search-field">
      <MyInput setuserInput={setuserInput} getHotelsInLocation={getHotelsInLocation} />
      <MyButton setCurrentPage={setCurrentPage} setIsLoading={setIsLoading} getHotelsInLocation={getHotelsInLocation} userInput={userInput} />
      <MyList />
    </div>
  );
};

export default MySearchBar;
