import React from "react";
import TodoComposer from "./components/TodoComposer";
import TodoList from "./components/TodoList";
import { todoList } from "./mocks";
import TodoFilter from "./components/TodoFIlter";
import { Status } from "./types";
import { TodosController } from "./controllers/TodosController";
import TodoItem from "./components/TodoItem";
import "./globals.css";

function App() {
  const [todos, setTodos] = React.useState(todoList);
  const [selectedStatus, setSelectedStatus] = React.useState<Status>("todo");
  const [search, setSearch] = React.useState("");

  const handleSearch = (text: string) => {
    setSearch(text);
  };

  const selectStatus = (status: Status) => {
    setSelectedStatus(status);
  };

  const handleCompleteTodo = (todoId: string) => {
    const changed = TodosController(todos).toggleComplete(todoId).get();
    setTodos(changed);
  };

  return (
    <div className="mt-20 flex flex-col items-center gap-y-10">
      <TodoComposer />
      <TodoFilter
        selectedStatus={selectedStatus}
        selectStatus={selectStatus}
        onSearchKeyword={handleSearch}
      />
      <TodoList>
        {TodosController(todos)
          .filter({ status: selectedStatus, search })
          .get()
          .map((todo) => (
            <TodoItem
              completeTodo={() => handleCompleteTodo(todo.id)}
              text={todo.text}
              status={todo.status}
              id={todo.id}
            />
          ))}
      </TodoList>
    </div>
  );
}

export default App;
