import React from "react";
import { Button } from "../ui/button";
import { Status } from "@/types";

interface Props {
  selectedStatus: Status;
  selectStatus: (status: Status) => void;
}

const statusList: Status[] = ["complete", "todo"];

const TodoFileter = ({ selectedStatus, selectStatus }: Props) => {
  return (
    <div className="space-x-4">
      {statusList.map((status) => (
        <Button
          onClick={() => selectStatus(status)}
          variant={status !== selectedStatus ? "secondary" : "default"}>
          {status}
        </Button>
      ))}
    </div>
  );
};

export default TodoFileter;
