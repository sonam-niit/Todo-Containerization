import { useState, useEffect } from "react";
import axios from "axios";
import TodoList from "./components/TodoList.jsx";
import TodoForm from "./components/TodoForm.jsx";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/todos").then((res) => {
      setTodos(res.data);
    });
  }, []);

  return (
    <div>
      <h1>To-Do List</h1>
      <TodoForm setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
