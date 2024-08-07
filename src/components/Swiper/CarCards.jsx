import React from "react";
import "./swiper.css";

const CarCards = (props) => {
  return (
    <div className="card-container">
      <div className="card-image">
        <img src={props.imageUrl} alt="Card Background" />
      </div>
      <div className="card-content">
      <h3>{props.cardText}</h3>
      <h5>{props.cardType} Cars</h5>
      </div>
    </div>
  );
};

export default CarCards;
