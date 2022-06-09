import React, { useState } from "react";
import cl from "./MyInput.module.css";

const MyInput = ({ setuserInput }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Where are you going?"
        className={cl.myInput}
        onChange={(e) => setuserInput(e.target.value)}
      />
    </div>
  );
};

export default MyInput;
