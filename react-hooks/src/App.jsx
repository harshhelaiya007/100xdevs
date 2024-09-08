import { useEffect, useState } from "react";

let id = 4;
function App() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      task: "go to gym",
      desc: "go to gym today",
    },
    {
      id: 2,
      task: "go to cycle",
      desc: "go to cycle today",
    },
    {
      id: 3,
      task: "go to eat",
      desc: "go tmemoo eat today",
    },
  ]);


  useEffect(() => {
    console.log('111');
    return () => {
      console.log('kdkdk');
    };
  }, []);

  return (
    // <div>
    //   <Header />
    //   <button onClick={() => {
    //     setTodo([...todo, {
    //       id: id++,
    //       title: Math.random() * 100,
    //       desc: Math.random() * 1000
    //     }])
    //   }}>Add a todo</button>
    //   {todo.map((item) => {
    //     console.log(item.id);
    //     return <Todo key={item.id} task={item.task} desc={item.desc}/>
    //   })}
    // </div>
    <div>
      <CardWrapper>
        <TextComponent />
      </CardWrapper>
    </div>
  );
}

function Header() {
  const [title, setTitle] = useState("Header 1");
  return (
    <>
      <button
        onClick={() => {
          setTitle(Math.random() * 1000);
        }}
      >
        Change
      </button>
      <div>{title}</div>
    </>
  );
}

const Todo = function ({ task, desc }) {
  return (
    <div>
      <h1>{task}</h1>
      <p>{desc}</p>
    </div>
  );
};

function TextComponent() {
  return <div>Text</div>;
}

function CardWrapper({ children }) {
  return (
    <div className="cardWrapper" style={{ border: "2px solid black" }}>
      {children}
    </div>
  );
}

export default App;
