import { describe, it, expect } from "vitest";
import { Todo } from "@/types";
import { filterTodolist } from ".";

describe("filterTodoList", () => {
  it("status가 complete인 todo를 반환", () => {
    const todoList: Todo[] = [
      { id: "1", text: "todo1", status: "todo" },
      { id: "2", text: "todo2", status: "complete" },
      { id: "3", text: "todo3", status: "complete" },
    ];
    expect(
      filterTodolist(todoList, { status: "complete", search: "" })
    ).toEqual([
      { id: "2", text: "todo2", status: "complete" },
      { id: "3", text: "todo3", status: "complete" },
    ]);
  });
  it("status가 todo인 todo를 반환", () => {
    const todoList: Todo[] = [
      { id: "1", text: "todo1", status: "todo" },
      { id: "2", text: "todo2", status: "complete" },
      { id: "3", text: "todo3", status: "complete" },
    ];
    expect(filterTodolist(todoList, { status: "todo", search: "" })).toEqual([
      { id: "1", text: "todo1", status: "todo" },
    ]);
  });
  it("status가 todo이면서 키워드를 포함하는 todo를 반환", () => {
    const todoList: Todo[] = [
      { id: "1", text: "todo1", status: "todo" },
      { id: "2", text: "todo2", status: "complete" },
      { id: "3", text: "todo3", status: "complete" },
    ];
    expect(filterTodolist(todoList, { status: "todo", search: "1" })).toEqual([
      { id: "1", text: "todo1", status: "todo" },
    ]);
  });
});
