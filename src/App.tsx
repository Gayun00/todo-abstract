import React, { useEffect } from "react";
import TodoComposer from "./components/TodoComposer";
import TodoList from "./components/TodoList";
import "./globals.css";
import { todoList } from "./mocks";
import TodoFileter from "./components/TodoFIlter";
import { Status } from "./types";

function App() {
  // api 호출을 통해 데이터를 불러온 것으로 가정
  const [todos, setTodos] = React.useState(todoList);
  const [selectedStatus, setSelectedStatus] = React.useState<Status>("todo");

  const selectStatus = (status: Status) => {
    setSelectedStatus(status);
  };

  const getTodoList = (status: Status) => {
    const filtered = todoList.filter((todo) => todo.status === status);
    setTodos(filtered);
  };

  useEffect(() => {
    getTodoList(selectedStatus);
  }, [selectedStatus]);

  return (
    <div className="mt-20 flex flex-col items-center gap-y-10">
      <TodoComposer />
      <TodoFileter
        selectedStatus={selectedStatus}
        selectStatus={selectStatus}
      />
      <TodoList data={todos} />
    </div>
  );
}

export default App;
