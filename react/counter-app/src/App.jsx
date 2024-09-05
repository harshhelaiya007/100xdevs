import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [todo, setTodo] = useState([
    {
      title: "first Todod",
      description: "lorem ipsusm",
    },
    {
      title: "second",
      description: "lorem ipsusm",
    },
  ]);

  return (
    <div>
      <CustomButton count={count} setCount={setCount} />
      <TodoFn todo={todo} />
    </div>
  );
}

function CustomButton(props) {
  return (
    <button
      onClick={() => {
        props.setCount((count) => count + 1);
      }}
    >
      Counter {props.count}
    </button>
  );
}

function TodoFn({ todo }) {
  console.log(todo); // This will now correctly log the todo array
  return (
    <ul>
      {todo.map((item, index) => (
        <li key={index}>
          {item.title}
          <p>{item.description}</p>
        </li>
      ))}
    </ul>
  );
}

export default App;
