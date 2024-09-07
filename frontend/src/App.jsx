import Input from "./Components/Input";
import "./App.css";

export default function App() {
  return (
    <>
      <div className="input-wrapper">
        <h2 style={{textAlign: "center", padding:"10px 0"}}>Sign Up</h2>
        <Input />
        <br/>
        <Input />
        <button>Sign Up</button>
      </div>
    </>
  );
}
