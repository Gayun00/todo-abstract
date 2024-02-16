import React from "react";
import { Card, CardTitle } from "../ui/card";

interface Props {
  text: string;
}

const TodoItem = ({ text }: Props) => {
  return (
    <Card className="p-4 flex items-center w-full h-16">
      <CardTitle>{text}</CardTitle>
    </Card>
  );
};

export default TodoItem;
