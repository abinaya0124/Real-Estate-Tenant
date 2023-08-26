import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      <NavLink to="/">Tenant Management System</NavLink>
      <NavLink to="/properties">Properties</NavLink>
      <NavLink to="/tenent">Tenent</NavLink>
    </div>
  );
};

export default Header;
