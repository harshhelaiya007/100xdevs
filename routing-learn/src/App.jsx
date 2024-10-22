import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
// import Dashboard from "./components/Dashboard/Dashboard";
// import Landing from "./components/Landing/Landing";
const Dashboard = React.lazy(() => import("./components/Dashboard/Dashboard"));
const Landing = React.lazy(() => import("./components/Landing/Landing"));

function App() {
  return (
    <>
      <BrowserRouter>
        <AppBar />
        <Suspense fallback={'Loading'}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Landing />} />
        </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;

const AppBar = () => {
  const navigate = useNavigate();
  return (
    <div style={{ background: "black", color: "white" }}>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Landing
      </button>
      <button
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        Dashboard
      </button>
    </div>
  );
};
