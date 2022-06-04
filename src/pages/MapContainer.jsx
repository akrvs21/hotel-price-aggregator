import React, { useEffect } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { useLocation } from "react-router-dom";

const MapContainer = (props) => {
  const location = useLocation();
  const { from } = location.state;
  console.log(from);
  const hotelCoordinates = from.split(",");

  return (
    <Map
      google={props.google}
      style={{ width: "100%", height: "100%" }}
      zoom={19}
      initialCenter={{
        lat: hotelCoordinates[0],
        lng: hotelCoordinates[1],
      }}
    >
      <Marker
        position={{
          lat: hotelCoordinates[0],
          lng: hotelCoordinates[1],
        }}
      />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyCCN-0AT-JyMcAFPTnH4u9Sltg57jy6gnI",
})(MapContainer);
