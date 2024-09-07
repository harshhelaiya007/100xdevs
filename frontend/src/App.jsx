import Input from "./Components/Input";
import "./App.css";

export default function App() {
  return (
    <>
      <div className="input-wrapper">
        <h2 style={{ textAlign: "center", padding: "10px 0" }}>Sign Up</h2>
        <Input inputId="userName" inputLabel="Username" />
        <br />
        <Input inputId="email" inputLabel="Email" />
        <br />
        <Input inputId="password" inputLabel="Password" />
        <button
          className="button"
          onClick={() => {
            fetch("http://localhost:3000/user/signup", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify({
                username: "harshhelaiya",
                email: "harshhelaiya4@gmail.com",
                password: "Justin@007",
              }),
            });
          }}
        >
          Sign Up
        </button>
      </div>
    </>
  );
}
