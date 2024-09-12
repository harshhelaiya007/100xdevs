import React from "react";
import "./Header.scss";
import logoImg from "../../assets/tata-logo.svg";
import Menu from "../Menu";

function Header() {
  return (
    <header>
      <div className="box-container">
        <div className="wrapper">
          <div className="logo-wrapper">
            <img src={logoImg} alt="tata logo" />
          </div>
          <Menu
            menuList={["Overview", "Compare", "Specs", "Price", "Nexon.ev"]}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
