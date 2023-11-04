import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter innerWidth paddings h-container">
        <a to="/">Tenant Management System</a>
        <div className="flexCenter h-menu">
          <a to="/residencies">Residencies</a>
          <a to="/tenent">Our Values</a>
          <a to="/tenent">Contact Us</a>
          <a to="/tenent">Get Started</a>
          <button className="button">
            <a to="/tenent">Contact</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
