import React, { useEffect } from "react";
import TodoComposer from "./components/TodoComposer";
import TodoList from "./components/TodoList";
import "./globals.css";
import { todoList } from "./mocks";

function App() {
  // api 호출을 통해 데이터를 불러온 것으로 가정
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
