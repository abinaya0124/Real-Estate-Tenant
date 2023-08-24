import React from "react";
import Header from "../common/Header";
import Properties from "../components/Properties";
import { Route, Routes } from "react-router-dom";
import TenentDetails from "../components/TenentDetails";

const Website = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/properties" element={<Properties />} />
        <Route path="/tenent" element={<TenentDetails />} />
      </Routes>
    </div>
  );
};

export default Website;
