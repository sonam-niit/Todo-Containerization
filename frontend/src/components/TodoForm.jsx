import { useState } from "react";
import axios from "axios";

export default function TodoForm({ setTodos }) {
  const [text, setText] = useState("");

  const addTodo = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/todos", { text });
    setTodos((prev) => [...prev, res.data]);
    setText("");
  };

  return (
    <form onSubmit={addTodo}>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
}
