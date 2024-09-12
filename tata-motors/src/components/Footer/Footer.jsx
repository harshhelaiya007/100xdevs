import React from "react";
import "./Footer.scss";
import logoImg from "../../assets/tata-logo.svg";
import Menu from "../Menu";

function Footer() {
  return (
    <footer>
      <div className="box-container">
        <div className="wrapper">
          <div className="logo-wrapper">
            <img
              src={logoImg}
              alt="tata logo"
              style={{ width: "57.38px", height: "53.05px" }}
            />
            <p className="copyright-text">Copyright © 2023 TATA Motors. All Rights Reserved</p>
          </div>
          <div className="rightSide_footer">
            <Menu
              menuList={["Quick Links", "Social Links", "Contact Us"]}
              footerMenu={"true"}
            />
            <Menu
              menuList={["Quick Links", "Social Links", "Contact Us"]}
              footerMenu={"true"}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
