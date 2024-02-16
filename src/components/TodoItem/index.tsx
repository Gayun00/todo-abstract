import { Card, CardTitle } from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import { Todo } from "@/types";

interface Props extends Todo {
  completeTodo: () => void;
}

const TodoItem = ({ text, status, completeTodo }: Props) => {
  return (
    <Card className="p-4 flex items-center gap-x-2 w-full h-16">
      <Checkbox onClick={completeTodo} checked={status == "complete"} />
      <CardTitle>{text}</CardTitle>
    </Card>
  );
};

export default TodoItem;
