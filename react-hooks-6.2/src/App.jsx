import { useEffect, useState } from "react";

function App() {
  const [todo, setTodo] = useState([]);
  const [id, setId] = useState(0);

  const handleButtonClick = (event) => {
    setId(event.target.textContent)
  }

  useEffect(() => {
    console.log("useEffect running!!");
    if (id == 1) {
      setTodo([
        {
          id: 1,
          task: "taks 1",
          description: "description 1",
        },
      ]);
    } else if (id == 2) {
      setTodo([
        {
          id: 2,
          task: "taks 2",
          description: "description 2",
        },
      ]);
    } else if (id == 3) {
      setTodo([
        {
          id: 3,
          task: "taks 3",
          description: "description 3",
        },
      ]);
    } else if (id == 4) {
      setTodo([
        {
          id: 4,
          task: "taks 4",
          description: "description 4",
        },
      ]);
    } else {
      setTodo([
        {
          id: 0,
          task: "Dummy",
          description: "Dummy description ",
        },
      ]);
    }

    return () => {
      console.log("unmount");
    };
  }, [id]);

  return (
    <>
      <button onClick={handleButtonClick}>
        1
      </button>
      <button onClick={handleButtonClick}>
        2
      </button>
      <button onClick={handleButtonClick}>
        3
      </button>
      <button onClick={handleButtonClick}>
        4
      </button>
      {todo.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.task}</p>
            <p>{item.description}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
