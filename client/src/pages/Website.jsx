import React from "react";
import Header from "../common/Header";
import Properties from "../components/properties/Properties";
import { Route, Routes } from "react-router-dom";
import TenantDetails from "../components/tenant/TenantDetails";
import PropertyDetail from "../components/propertyDetail/PropertyDetail";
import Hero from "../components/HeroTop/Hero";
import "./website.scss";

const Website = () => {
  return (
    <div className="website">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      {/* <Routes>
        <Route path="/properties" element={<Properties />} /> */}
      {/* <Route path="/hero" element={<Hero />} /> */}
      {/* <Route path="/property/:propertyId" element={<PropertyDetail />} />
        <Route path="/tenent" element={<TenantDetails />} />
      </Routes> */}
    </div>
  );
};

export default Website;
