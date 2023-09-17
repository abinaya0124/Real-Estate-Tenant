import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter innerWidth paddings h-container">
        <NavLink to="/">Tenant Management System</NavLink>
        <div className="h-menu">
          <NavLink to="/properties">Properties</NavLink>
          <NavLink to="/tenent">Our Values</NavLink>
          <NavLink to="/tenent">Contact Us</NavLink>
          <NavLink to="/tenent">Get Started</NavLink>
          <button>
            <NavLink to="/tenent">Contact</NavLink>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
