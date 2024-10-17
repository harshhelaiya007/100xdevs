import { React, useContext } from "react";
import Button from "./Button";
import { countContext } from "../context";

function Count({ setCount }) {
  const count = useContext(countContext);
  return (
    <>
      <CountRendered count={count} />
      <Button count={count} setCount={setCount} />
    </>
  );
}

function CountRendered({ count }) {
  return <div>{count}</div>;
}

export default Count;
