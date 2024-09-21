import { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
const Dashboard = lazy(() => import("./components/Dashboard"));
const Landing = lazy(() => import("./components/Landing"));

function App() {
  return (
    <BrowserRouter>
      <Appbar />
      <Routes>
        <Route
          path="/Dashboard"
          element={
            <Suspense fallback={"loading..."}>
              <Dashboard />
            </Suspense>
          }
        ></Route>
        <Route
          path="/"
          element={
            <Suspense fallback={"loading..."}>
              <Landing />
            </Suspense>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

function Appbar() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        padding: "30px",
        background: "black",
        width: "100%",
        color: "white",
      }}
    >
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        First
      </button>
      <button
        onClick={() => {
          navigate("/Dashboard");
        }}
      >
        Second
      </button>
    </div>
  );
}

export default App;
