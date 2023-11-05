import React, { useState } from "react";
import "./value.scss";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import tenentProject_House from "../../images/tenentProject_House.jpeg";
import data from "../../Data/Accordion";
import { v4 as uuidv4 } from "uuid";

const Value = () => {
  uuidv4();
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        <div className="v-left">
          <div className="img-container">
            <img src={tenentProject_House} />
          </div>
        </div>
        <div className="flexColStart v-right">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value We Give To You</span>
          <span className="secondaryText">
            We are ready to help by providing the best services for you
          </span>

          <Accordion
            allowMultipleExpanded={false}
            preExpanded={[0]}
            className="accordion"
          >
            {data.map((item, id) => {
              const [className, setClassName] = useState(null);
              return (
                <AccordionItem
                  className={`accordionItem ${className}`}
                  key={id}
                  uuid={id}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="flexCenter accordionButton">
                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded
                            ? setClassName("expanded")
                            : setClassName("collapsed")
                        }
                      </AccordionItemState>
                      <div className="flexCenter">{item.icon}</div>
                      <span className="primaryText">{item.heading}</span>
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
