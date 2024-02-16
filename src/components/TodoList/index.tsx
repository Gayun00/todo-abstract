import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import TodoItem from "../TodoItem";
import { Todo } from "@/types";

interface Props {
  data: Todo[];
}

const TodoList = ({ data }: Props) => {
  return (
    <Card className="w-full max-w-xl">
      <CardHeader className="text-center">
        <CardTitle>Todo List</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {data.map((todo) => (
          <TodoItem text={todo.text} status={todo.status} id={todo.id} />
        ))}
      </CardContent>
    </Card>
  );
};

export default TodoList;
