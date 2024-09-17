import React from "react";

function Radio({ radioId, radioColor }) {
  return (
    <div className="radioWrapper">
      <input type="radio" name="radio" id={radioId} />
      <span className="checkBox" style={{ background: radioColor }}></span>
    </div>
  );
}

export default Radio;
