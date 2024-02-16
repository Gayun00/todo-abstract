import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const TodoComposer = () => {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input />
      <Button>입력</Button>
    </div>
  );
};

export default TodoComposer;
