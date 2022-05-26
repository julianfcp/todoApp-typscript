import React from "react";
import { SetStateAction } from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent) => void;
}

const index: React.FC<Props> = ({ todo, setTodo, handleSubmit }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={todo}
          type="text"
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        ></input>
        <input type="submit"></input>
      </form>
    </div>
  );
};

export default index;
