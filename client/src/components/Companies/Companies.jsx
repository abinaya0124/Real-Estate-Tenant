import React from "react";
import "./companies.scss";
import company_1 from "../../images/company_1.png";
import company_2 from "../../images/company_2.png";
import company_3 from "../../images/company_3.jpg";
import company_4 from "../../images/company_4.jpeg";

const Companies = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        <img src={company_1} />
        <img src={company_2} />
        <img src={company_3} />
        <img src={company_4} />
      </div>
    </section>
  );
};

export default Companies;
