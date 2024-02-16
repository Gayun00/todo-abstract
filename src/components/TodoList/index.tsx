import React, { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface Props {
  children: ReactNode;
}

const TodoList = ({ children }: Props) => {
  return (
    <Card className="w-full max-w-xl">
      <CardHeader className="text-center">
        <CardTitle>Todo List</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">{children}</CardContent>
    </Card>
  );
};

export default TodoList;
