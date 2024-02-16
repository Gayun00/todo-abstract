import React, { ChangeEvent } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const TodoComposer = () => {
  const [input, setInput] = React.useState("");
  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInput(value);
  };

  const addTodo = () => {
    console.log("add todo input: ", input);
  };

  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input onChange={onChangeInput} />
      <Button onClick={addTodo}>입력</Button>
    </div>
  );
};

export default TodoComposer;
