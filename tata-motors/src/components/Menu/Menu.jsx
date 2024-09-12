import React from "react";
import "./Menu.scss";

function Menu({ menuList }) {
  return (
    <ul>
      {menuList.map((menu) => {
        return <li>{menu}</li>;
      })}
    </ul>
  );
}

export default Menu;
