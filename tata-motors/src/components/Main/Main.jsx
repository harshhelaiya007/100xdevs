import React from "react";
import HeroBanner from "../HeroBanner";
import SimpleSlider from "../SimpleSlider";
import Image from "../Image";
import nexonImg from "../../assets/nexon.png";
import "./Main.scss";

function Main() {
  return (
    <main>
      <HeroBanner />
      <section>
        <div className="main-wrapper">
          <Image imgSrc={nexonImg} imgAlt={"nexon image"}/>
          <SimpleSlider />
        </div>
        <div className="main-wrapper  ">
          <SimpleSlider />
          <Image imgSrc={nexonImg} imgAlt={"nexon image"}/>
        </div>
      </section>
    </main>
  );
}

export default Main;
