import React from "react";
import MapContainer from "../pages/MapContainer";
import { Route, Routes, Navigate } from "react-router-dom";
import ProductList from "../pages/ProductList";

const AppRouter = () => {
  return ( 
    <div>
      <Routes>
        <Route path="/hotel-price-aggregator" element={<ProductList />} />
        <Route path="/map" element={<MapContainer />} />
        <Route path="*" element={<Navigate to="/hotel-price-aggregator" replace />} />
      </Routes>
    </div>
  );
};

export default AppRouter;