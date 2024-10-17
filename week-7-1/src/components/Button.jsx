import React from "react";

function Button({ count, setCount }) {
  return (
    <div>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount((count) => count - 1);
        }}
      >
        Descrease
      </button>
    </div>
  );
}

export default Button;
