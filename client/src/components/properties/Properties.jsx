import React from "react";
import "./properties.css";
import PropertyData from "../../PropertyData.json";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { sliderSettings } from "../../common/SliderSettings";
import { NavLink } from "react-router-dom";

const Properties = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerwidth r-container">
        <div className="r-head">
          <p className="text1">Best Choices</p>
          <p className="text2">Popular Residencies</p>
        </div>
        <div className="swiper-cards">
          <Swiper {...sliderSettings}>
            {PropertyData.map((card, id) => (
              <SwiperSlide key={id}>
                <div className="r-card">
                  <NavLink to={`/property/${card.id}`}>
                    <img src={card.img} alt="Home" className="p-img" />
                    <p className="secondaryText r-price">
                      <span>$</span>
                      <span>{card.price}</span>
                    </p>
                    <p>{card.name}</p>
                    <p>{card.detail} </p>
                  </NavLink>
                </div>
              </SwiperSlide>
            ))}
            <SliderButtons />
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Properties;
const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="p-buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
