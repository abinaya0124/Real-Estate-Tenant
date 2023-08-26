import React from "react";
import { useParams } from "react-router-dom";
import PropertyData from "../../PropertyData.json";

const PropertyDetail = () => {
  const { propertyId } = useParams();
  // console.log("Card ID:", cardId);

  const card = PropertyData.find((card) => card.id === parseInt(propertyId));

  return (
    <div>
      <img src={card.img} />
      <p>{card.name}</p>
      <p>{card.price}</p>
      <p>{card.detail}</p>
      <p>{card.location}</p>
    </div>
  );
};

export default PropertyDetail;
