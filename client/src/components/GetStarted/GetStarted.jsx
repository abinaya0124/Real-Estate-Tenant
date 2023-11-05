import React from "react";
import "./GetStarted.scss";

const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get Started With Us</span>
          <span className="secondaryText">
            Subscribe and Find your Residence soon
          </span>
          <button className="button">
            <a href="mailto:@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
