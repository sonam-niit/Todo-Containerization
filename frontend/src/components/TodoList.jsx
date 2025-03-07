import axios from "axios";

export default function TodoList({ todos, setTodos }) {
  const toggleComplete = async (id) => {
    const res = await axios.put(`http://localhost:5000/api/todos/${id}`);
    setTodos((prev) => prev.map((todo) => (todo._id === id ? res.data : todo)));
  };

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:5000/api/todos/${id}`);
    setTodos((prev) => prev.filter((todo) => todo._id !== id));
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo._id}>
          <span
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
            onClick={() => toggleComplete(todo._id)}
          >
            {todo.text}
          </span>
          <button onClick={() => deleteTodo(todo._id)}>❌</button>
        </li>
      ))}
    </ul>
  );
}
