import React from "react";
import "./Menu.scss";

function Menu({ menuList = [], footerMenu = false }) {
  return (
    <ul className={footerMenu ? "footer-menu" : ""}>
      {menuList &&
        menuList.map((menu, index) => {
          return <li key={index + "menuList"}>{menu}</li>;
        })}
    </ul>
  );
}

export default Menu;
