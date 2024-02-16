import { Status, Todo } from "@/types";
import { filterTodolist } from "@/utils";

export const TodosController = (todoList: Todo[]) => ({
  filter: (filter: { status: Status; search: string }) => {
    const updated = filterTodolist(todoList, {
      status: filter.status,
      search: filter.search,
    });
    return TodosController(updated);
  },
  add: (todo: Todo) => {
    return TodosController([...todoList, todo]);
  },
  toggleComplete: (todoId: string) => {
    const nextTodos: Todo[] = todoList.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          status: todo.status === "todo" ? "complete" : "todo",
        };
      }
      return todo;
    });
    return TodosController(nextTodos);
  },
  get: () => todoList,
});
