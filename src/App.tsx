import React, { useEffect } from "react";
import TodoComposer from "./components/TodoComposer";
import TodoList from "./components/TodoList";
import "./globals.css";
import { todoList } from "./mocks";
import TodoFileter from "./components/TodoFIlter";
import { Status } from "./types";
import { filterTodolist } from "./utils";

function App() {
  // api 호출을 통해 데이터를 불러온 것으로 가정
  const [todos, setTodos] = React.useState(todoList);
  const [selectedStatus, setSelectedStatus] = React.useState<Status>("todo");
  const [search, setSearch] = React.useState("");

  const selectStatus = (status: Status) => {
    setSelectedStatus(status);
  };

  const handleSearch = (text: string) => {
    setSearch(text);
  };

  const getTodoList = () => {
    const updated = filterTodolist(todoList, {
      status: selectedStatus,
      search,
    });
    setTodos(updated);
  };

  useEffect(() => {
    getTodoList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, selectedStatus]);

  return (
    <div className="mt-20 flex flex-col items-center gap-y-10">
      <TodoComposer />
      <TodoFileter
        selectedStatus={selectedStatus}
        selectStatus={selectStatus}
        handleSearch={handleSearch}
      />
      <TodoList data={todos} />
    </div>
  );
}

export default App;
