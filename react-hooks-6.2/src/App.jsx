// import { useEffect, useState } from "react";

// function App() {
//   const [todo, setTodo] = useState([]);
//   const [id, setId] = useState(0);
//   const [count, setCount] = useState(0);
//   const [inputValue, setInputValue] = useState('');

//   const handleButtonClick = (event) => {
//     setId(event.target.textContent);
//   };

//   useEffect(() => {
//     console.log("useEffect running!!");
//     if (id == 1) {
//       setTodo([
//         {
//           id: 1,
//           task: "taks 1",
//           description: "description 1",
//         },
//       ]);
//     } else if (id == 2) {
//       setTodo([
//         {
//           id: 2,
//           task: "taks 2",
//           description: "description 2",
//         },
//       ]);
//     } else if (id == 3) {
//       setTodo([
//         {
//           id: 3,
//           task: "taks 3",
//           description: "description 3",
//         },
//       ]);
//     } else if (id == 4) {
//       setTodo([
//         {
//           id: 4,
//           task: "taks 4",
//           description: "description 4",
//         },
//       ]);
//     } else {
//       setTodo([
//         {
//           id: 0,
//           task: "Dummy",
//           description: "Dummy description ",
//         },
//       ]);
//     }

//     return () => {
//       console.log("unmount");
//     };
//   }, [id]);

//   return (
//     <>
//       <button onClick={handleButtonClick}>1</button>
//       <button onClick={handleButtonClick}>2</button>
//       <button onClick={handleButtonClick}>3</button>
//       <button onClick={handleButtonClick}>4</button>
//       {todo.map((item) => {
//         return (
//           <div key={item.id}>
//             <p>{item.task}</p>
//             <p>{item.description}</p>
//           </div>
//         );
//       })}

//       <input type="number" id="takeValue" onInput={(e) => {
//         setInputValue(e.target.value)
//       }}/>
//       {"sum value is " + inputValue}
//       <br></br>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         counter {count}
//       </button>
//     </>
//   );
// }

// export default App;

// import { useState, useMemo } from "react";

// function App() {
//   const [counter, setCounter] = useState(0);
//   const [inputValue, setInputValue] = useState(1);

//   let count = useMemo(() => {
//     let count = 0;
//     for (let i = 1; i <= inputValue; i++) {
//       count = count + i;
//       console.log("count", "running");
//     }
//     return count;
//   }, [inputValue]);

//   return (
//     <div>
//       <input
//         onChange={function (e) {
//           setInputValue(e.target.value);
//         }}
//         placeholder={"Find sum from 1 to n"}
//       ></input>
//       <br />
//       Sum from 1 to {inputValue} is {count}
//       <br />
//       <button
//         onClick={() => {
//           setCounter(counter + 1);
//         }}
//       >
//         Counter ({counter})
//       </button>
//     </div>
//   );
// }

// export default App;

import { memo, useState } from "react";

function App() {
  const [count, setCount] = useState(0)

  function logSomething() {
    console.log("child clicked")
  }

  return <div>
    <Child onClick={logSomething} />
    <button onClick={() => {
      setCount(count + 1);
    }}>Click me {count}</button>
  </div>
}

const Child = (({inputFunction}) => {
  console.log("child render")

  return <div>
    <button onClick={inputFunction}>Button clicked</button>
  </div>
})

export default App;
