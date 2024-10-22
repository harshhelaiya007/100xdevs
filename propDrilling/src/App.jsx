import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { CountContext } from "./context";
import { useContext } from "react";

function App() {
  return (
    <>
      Hi there!
      <Count />
    </>
  );
}

function Count() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CountContext.Provider value={count}>
        <CountRender count={count} />
        <Button setCount={setCount} />
      </CountContext.Provider>
    </>
  );
}

function CountRender() {
  const count = useContext(CountContext);
  return <>{count}</>;
}

function Button({ setCount }) {
  const count = useContext(CountContext);
  return (
    <div>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount((prev) => prev - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
