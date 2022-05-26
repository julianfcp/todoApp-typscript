import React from "react";
import { SetStateAction } from "react";
import { todoModel } from "../models/todoModel";

interface Props {
  todos: todoModel[];
  setTodos: React.Dispatch<SetStateAction<todoModel[]>>;
}

const index: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="cards">
      {todos.map((item, index) => (
        <div className="cards__card">{item.todo}</div>
      ))}
    </div>
  );
};

export default index;
