import { useRef } from "react";
import { Button } from "../ui/button";
import { Status } from "@/types";
import { Input } from "../ui/input";

interface Props {
  selectStatus: (status: Status) => void;
  selectedStatus: Status;
  onSearchKeyword: (text: string) => void;
}

const statusList: Status[] = ["complete", "todo"];

const TodoFilter = ({
  selectStatus,
  selectedStatus,
  onSearchKeyword,
}: Props) => {
  const ref = useRef<HTMLInputElement | null>(null);

  const handleSearchKeyword = () => {
    onSearchKeyword(ref?.current?.value || "");
  };

  return (
    <div className="space-x-4 space-y-4">
      <div className="flex gap-x-4">
        <Input ref={ref} />
        <Button onClick={handleSearchKeyword}>검색</Button>
      </div>

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

export default TodoFilter;
