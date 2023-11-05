import React from "react";
import Header from "../common/Header";
import Residencies from "../components/residencies/Residencies";
import { Route, Routes } from "react-router-dom";
import TenantDetails from "../components/Tenant/TenantDetails";
import PropertyDetail from "../components/propertyDetail/PropertyDetail";
import Hero from "../components/HeroTop/Hero";
import "./website.scss";
import Companies from "../components/companies/Companies";
import Value from "../components/Value/Value";
import Contact from "../components/Contact/Contact";

const Website = () => {
  return (
    <div className="website">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residencies />
      <Value />
      <Contact />
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
