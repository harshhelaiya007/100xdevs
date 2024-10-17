import { lazy, Suspense, useState, useContext } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Button from "./components/Button";
import Count from "./components/Count";
import { countContext } from "./context";
const Dashboard = lazy(() => import("./components/Dashboard"));
const Landing = lazy(() => import("./components/Landing"));

function App() {
  const [count, setCount] = useState(0);
  const [demo, setDemo] = useState('Harsh');

  return (
    // <BrowserRouter>
    //   <Appbar />
    //   <Routes>
    //     <Route
    //       path="/Dashboard"
    //       element={
    //         <Suspense fallback={"loading..."}>
    //           <Dashboard />
    //         </Suspense>
    //       }
    //     ></Route>
    //     <Route
    //       path="/"
    //       element={
    //         <Suspense fallback={"loading..."}>
    //           <Landing />
    //         </Suspense>
    //       }
    //     ></Route>
    //   </Routes>
    // </BrowserRouter>
    <>
      <countContext.Provider value={count}>
        <Count setCount={setCount} />
      </countContext.Provider>
    </>
  );
}

// function Appbar() {
//   const navigate = useNavigate();
//   return (
//     <div
//       style={{
//         padding: "30px",
//         background: "black",
//         width: "100%",
//         color: "white",
//       }}
//     >
//       <button
//         onClick={() => {
//           navigate("/");
//         }}
//       >
//         First
//       </button>
//       <button
//         onClick={() => {
//           navigate("/Dashboard");
//         }}
//       >
//         Second
//       </button>
//     </div>
//   );
// }

export default App;
