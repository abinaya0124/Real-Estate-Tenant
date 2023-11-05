import React from "react";
import "./residencies.scss";
import ResidencyData from "../../Data/ResidencyData.json";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { sliderSettings } from "../../Common/SliderSettings";
import { NavLink } from "react-router-dom";

const Residencies = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerwidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>
        {/* <div className="swiper-cards"> */}
        <Swiper {...sliderSettings}>
          <SliderButtons />
          {ResidencyData.map((card, id) => (
            <SwiperSlide key={id}>
              <div className="flexColStart r-card">
                {/* <NavLink to={`/property/${card.id}`}> */}
                <img src={card.img} alt="Home" className="p-img" />
                <span className="secondaryText r-price">
                  <span style={{ color: "orangered" }}>$</span>
                  <span>{card.price}</span>
                </span>
                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail} </span>
                {/* </NavLink> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Residencies;
const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className=" r-buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
