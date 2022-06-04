import React, { useState, useEffect, useMemo } from "react";
import ProductItem from "../Components/ProductItem";
import MyNavbar from "../UI/MyNavbar/MyNavbar";
import MySearchBar from "../UI/MySearchBar/MySearchBar";

import axios from "axios";
import MyLoader from "../UI/Loader/MyLoader";
import Pagination from "../UI/Pagination/Pagination";

const ProductList = () => {
  const [hotelList, setHotelList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(5);
  const [isLoading, setIsLoading] = useState(false);

  // Get user location by IP
  const getCurrentLocation = () => {
    return fetch("https://ipinfo.io/json?token=18d1d2e8977258").then(
      (response) => response.json()
    );
  };

  // Get list of hotels in specific location
  const getHotelsInLocation = (destInfo) => {
    setHotelList([]);
    console.log("destInfo is: ", destInfo);
    const options = {
      method: "GET",
      url: "https://booking-com.p.rapidapi.com/v1/hotels/search",
      params: {
        checkout_date: "2022-10-01",
        units: "metric",
        dest_id: destInfo.destId,
        dest_type: destInfo.destType,
        locale: "en-gb",
        adults_number: 2,
        order_by: "popularity",
        filter_by_currency: "USD",
        checkin_date: "2022-09-30",
        room_number: 1,
      },
      headers: {
        "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
        "X-RapidAPI-Key": "2768401f33msh7cb5aec92e19be8p11aab2jsncfd464be8c10",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.result);
        setIsLoading(false);
        setHotelList(response.data.result);
        sessionStorage.setItem(
          "hotelList",
          JSON.stringify(response.data.result)
        );
        // localStorage.setItem("saveProductList", JSON.stringify(hotelList));
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    let localHotels = JSON.parse(sessionStorage.getItem("hotelList"));
    if (localHotels) {
      console.log("if");
      setHotelList(localHotels);
    } else {
      console.log("else");
      getCurrentLocation().then((currentLocation) => {
        console.log("Current city ", currentLocation.city);
        const options = {
          method: "GET",
          url: "https://booking-com.p.rapidapi.com/v1/hotels/locations",
          params: { locale: "en-gb", name: currentLocation.city },
          headers: {
            "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
            "X-RapidAPI-Key":
              "2768401f33msh7cb5aec92e19be8p11aab2jsncfd464be8c10",
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
      });
    }
  }, []);

  const indexOfLastItem = currentPage * postPerPage;
  const indexOfFirstItem = indexOfLastItem - postPerPage;
  const currentPosts = hotelList.slice(indexOfFirstItem, indexOfLastItem);
  console.log(indexOfLastItem, indexOfFirstItem, currentPosts);

  const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 8);
    }
  };

  const paginate = (pageNumber) => {
    scrollToTop();
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <MyNavbar />
      <MySearchBar
        setCurrentPage={setCurrentPage}
        setIsLoading={setIsLoading}
        getHotelsInLocation={getHotelsInLocation}
      />

      {isLoading ? (
        <div
          style={{ display: "flex", justifyContent: "center", clear: "both" }}
        >
          <MyLoader />
        </div>
      ) : (
        currentPosts.map((hotel) => (
          <ProductItem key={hotel.hotel_id} hotel={hotel} />
        ))
      )}
      <Pagination
        postPerPage={postPerPage}
        totalPost={hotelList.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </>
  );
};

export default ProductList;
