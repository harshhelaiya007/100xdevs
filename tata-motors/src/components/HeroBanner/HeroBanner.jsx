import React from "react";
import "./HeroBanner.scss";
import carImg from "../../assets/black-nexon.svg";
import Button from "../Button/Button";

function HeroBanner() {
  return (
    <>
      <div className="banner-wrapper">
        <div className="box-container">
          <div className="content-and-img">
            <h1 className="banner-title">Daytona Grey</h1>
            <div className="carImage-wrapper">
              <img src={carImg} alt="" />
            </div>
            <div className="banner-button">
              <Button buttonText={"Book Now"} buttonType={"type1"}/>
              <Button buttonText={"See all prices"} buttonType={"type2"}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroBanner;
