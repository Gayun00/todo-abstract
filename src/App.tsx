import React, { useEffect } from "react";
import TodoComposer from "./components/TodoComposer";
import TodoList from "./components/TodoList";
import "./globals.css";
import { todoList } from "./mocks";

function App() {
  const [todos, setTodos] = React.useState(todoList);

  const getTodoList = () => {
    setTodos(todoList);
  };

  useEffect(() => {
    getTodoList();
  }, []);

  return (
    <div className="mt-20 flex flex-col items-center gap-y-10">
      <TodoComposer />
      <TodoList data={todos} />
    </div>
  );
}

export default App;
