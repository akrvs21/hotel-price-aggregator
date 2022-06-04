import React from "react";
import cl from "./MyButton.module.css";
import axios from "axios";

const MyButton = ({
  userInput,
  getHotelsInLocation,
  setIsLoading,
  setCurrentPage,
}) => {
  const searchLocation = (location) => {
    setCurrentPage(1);
    setIsLoading(true);
    const options = {
      method: "GET",
      url: "https://booking-com.p.rapidapi.com/v1/hotels/locations",
      params: { locale: "en-gb", name: location },
      headers: {
        "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
        "X-RapidAPI-Key": "2768401f33msh7cb5aec92e19be8p11aab2jsncfd464be8c10",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        let destId = response.data[0].dest_id;
        let destType = response.data[0].dest_type;
        const destInfo = { destId, destType };
        getHotelsInLocation(destInfo);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div>
      <button onClick={() => searchLocation(userInput)} className={cl.myButton}>
        Search
      </button>
    </div>
  );
};

export default MyButton;
