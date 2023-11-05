import React from "react";
import "./contact.scss";
import tenentProject_House from "../../images/tenentProject_House.jpeg";

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        <div className="c-left">left</div>
        <div className="c-right">
          <div className="image-container">
            <img src={tenentProject_House} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
