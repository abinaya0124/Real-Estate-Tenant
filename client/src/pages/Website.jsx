import React from "react";
import Header from "../common/Header";
import Properties from "../components/properties/Properties";
import { Route, Routes } from "react-router-dom";
import TenentDetails from "../components/tenant/TenentDetails";
import PropertyDetail from "../components/propertyDetail/PropertyDetail";

const Website = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/properties" element={<Properties />} />
        <Route path="/property/:propertyId" element={<PropertyDetail />} />
        <Route path="/tenent" element={<TenentDetails />} />
      </Routes>
    </div>
  );
};

export default Website;
