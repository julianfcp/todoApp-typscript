import React from "react";
import { SetStateAction } from "react";
import "../../App.css";

interface Props {
  todo: string;
  setTodo?: React.Dispatch<SetStateAction<string>>; // optional "?"
  handleAddTodo: (e: React.FormEvent) => void;
  handleTodo: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const index: React.FC<Props> = ({
  todo,
  setTodo,
  handleTodo,
  handleAddTodo,
}) => {
  return (
    <form onSubmit={handleAddTodo} className="inputForm">
      <input
        className="inputForm__text"
        value={todo}
        type="text"
        onChange={handleTodo}
      ></input>
      <input className="inputForm__submit" type="submit" value="Ok"></input>
    </form>
  );
};

export default index;
