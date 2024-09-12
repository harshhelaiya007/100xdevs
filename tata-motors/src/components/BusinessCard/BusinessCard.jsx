import React from "react";
import "./BusinessCard.scss";

function BusinessCard({ cardName, cardDescription }) {
  return (
    <div className="cardWrapper">
      <h1 className="name">{cardName}</h1>
      <p className="description">{cardDescription}</p>
    </div>
  );
}

export default BusinessCard;
