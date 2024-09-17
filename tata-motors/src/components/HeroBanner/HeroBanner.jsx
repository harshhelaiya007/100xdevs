import React from "react";
import "./HeroBanner.scss";
import carImg from "../../assets/black-nexon.svg";
import Button from "../Button/Button";
import Radio from "../Radio";

function HeroBanner() {
  return (
    <>
      <div className="banner-wrapper">
        <div className="box-container">
          <div className="content-and-img">
            <h1 className="banner-title">Daytona Grey</h1>
            <div className="carImage-wrapper">
              <img src={carImg} alt="" />
              <div className="radio-button-wrapper">
                <Radio radioId={"id1"} radioColor="#3C2F75"/>
                <Radio radioId={"id2"} radioColor="#6E1618"/>
                <Radio radioId={"id3"} radioColor="#38393B"/>
                <Radio radioId={"id4"} radioColor="#DEDEDE"/>
              </div>
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
