import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CustomButton count={count} setCount={setCount}/>
    </div>
  );
}

function CustomButton(props) {

  return <button onClick={()=>{
    props.setCount((count) => count + 1)
  }}>
    Counter {props.count}
  </button>

}

export default App;
