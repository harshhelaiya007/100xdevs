import { useState } from "react";

export default function CreateTodo() {

  const [todo, setTodo] = useState([]);

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Enter Title"
          onChange={(e) => {
            setTodo({
                ...todo,
                title: e.target.value
            })
          }}
        />
        <br />
        <input
          type="text"
          placeholder="Enter Description"
          onChange={(e) => {
            setTodo({
                ...todo,
                description: e.target.value
            })
          }}
        />
        <br />
        <button
          onClick={() => {
            if(todo != "") {
                fetch("http://localhost:3000/addTask", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json", // Add this header
                  },
                  body: JSON.stringify(todo),
                }).then(async function (res) {
                  const json = await res.json();
                  console.log(json);
                });
            }
            return;
          }}
        >
          Add
        </button>
      </div>
    </>
  );
}
