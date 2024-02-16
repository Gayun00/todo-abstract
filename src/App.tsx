import React from "react";
import TodoComposer from "./components/TodoComposer";
import TodoList from "./components/TodoList";
import "./globals.css";
import { todoList } from "./mocks";
import TodoFilter from "./components/TodoFIlter";
import { Status, Todo } from "./types";
import { filterTodolist } from "./utils";

function App() {
  // api 호출을 통해 데이터를 불러온 것으로 가정
  const [todos] = React.useState(todoList);
  const [selectedStatus, setSelectedStatus] = React.useState<Status>("todo");
  const [search, setSearch] = React.useState("");

  const handleSearch = (text: string) => {
    setSearch(text);
  };

  const selectStatus = (status: Status) => {
    setSelectedStatus(status);
  };

  return (
    <div className="mt-20 flex flex-col items-center gap-y-10">
      <TodoComposer />
      <TodoFilter
        selectedStatus={selectedStatus}
        selectStatus={selectStatus}
        onSearchKeyword={handleSearch}
      />
      <TodoList
        data={TodosController(todos)
          .filter({ status: selectedStatus, search })
          .get()}
      />
    </div>
  );
}

export default App;

export const TodosController = (todoList: Todo[]) => ({
  filter: (filter: { status: Status; search: string }) => {
    const updated = filterTodolist(todoList, {
      status: filter.status,
      search: filter.search,
    });
    return TodosController(updated);
  },
  get: () => todoList,
});
