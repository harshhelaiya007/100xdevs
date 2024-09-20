import React from "react";

function Image({ imgSrc, imgAlt }) {
  return (
    <div className="imageWrapper">
      <img src={imgSrc} alt={imgAlt} />
    </div>
  );
}

export default Image;
