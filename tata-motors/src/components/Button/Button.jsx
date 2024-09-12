import React from "react";
import "./Button.scss";

function Button({buttonText, buttonType}) {
  return (
    <div className={buttonType + " button-wrapper"}>
      <button>{buttonText}</button>
    </div>
  );
}

export default Button;
