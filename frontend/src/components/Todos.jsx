export function Todos({ todos }) {
  return (
    <>
      {todos.map((todo, i) => {
        return (
          <div key={i}>
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
            <button>mark as completed</button>
          </div>
        );
      })}
    </>
  );
}
