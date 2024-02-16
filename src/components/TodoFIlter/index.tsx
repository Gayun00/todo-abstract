import React, { ChangeEvent } from "react";
import { Button } from "../ui/button";
import { Status } from "@/types";
import { Input } from "../ui/input";

interface Props {
  selectedStatus: Status;
  selectStatus: (status: Status) => void;
  handleSearch: (text: string) => void;
}

const statusList: Status[] = ["complete", "todo"];

const TodoFileter = ({ selectedStatus, selectStatus, handleSearch }: Props) => {
  const [keyword, setKeyword] = React.useState("");
  const handleChangeKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleClickSearch = () => {
    handleSearch(keyword);
  };

  return (
    <div className="space-x-4 space-y-4">
      <div className="flex gap-x-4">
        <Input onChange={handleChangeKeyword} />
        <Button onClick={handleClickSearch}>검색</Button>
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

export default TodoFileter;
