import React from "react";
import "./Menu.scss";

function Menu({ menuList = [], footerMenu = false }) {
  return (
    <ul className={footerMenu ? "footer-menu" : ""}>
      {menuList &&
        menuList.map((menu, index) => {
          return (
            <a href="#" key={index + "menuList"}>
              <li>{menu}</li>
            </a>
          );
        })}
    </ul>
  );
}

export default Menu;
