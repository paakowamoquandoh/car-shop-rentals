import React from "react";
import "./swiper.css";

const CarCards = ({ imageUrl, cardText, cardType }) => {
  return (
    <div className="card-container">
      <div className="card-image">
        <img src={imageUrl} alt="Card Background" />
      </div>
      <div className="card-content">
      <h3>{cardText}</h3>
      <h5>{cardType} Cars</h5>
      </div>
    </div>
  );
};

export default CarCards;
