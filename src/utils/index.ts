import { Status, Todo } from "@/types";

export const filterTodolist = (
  todoList: Todo[],
  filter: { status: Status; search: string }
) => {
  const filtered = todoList.filter(
    (todo) => todo.status === filter.status && todo.text.includes(filter.search)
  );
  return filtered;
};
