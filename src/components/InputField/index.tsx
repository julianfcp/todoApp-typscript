import React from "react";
import { SetStateAction } from "react";
import "../../App.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent) => void;
}

const index: React.FC<Props> = ({ todo, setTodo, handleSubmit }) => {
  return (
    <div className="inputField">
      <form onSubmit={handleSubmit}>
        <input
          className="inputField__text"
          value={todo}
          type="text"
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        ></input>
        <input className="inputField__submit" type="submit" value="Ok"></input>
      </form>
    </div>
  );
};

export default index;
