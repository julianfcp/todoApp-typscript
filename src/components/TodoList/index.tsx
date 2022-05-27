import React from "react";
import { SetStateAction } from "react";
import { todoModel } from "../models/todoModel";
import TodoCard from "../TodoCard";

interface Props {
  todos: todoModel[];
  setTodos: React.Dispatch<SetStateAction<todoModel[]>>;
}

const index: React.FC<Props> = ({ todos, setTodos }) => {
  const handleDelete = (todo: todoModel) => {
    let newList = todos.filter((el) => el.id !== todo.id);
    setTodos(newList);
    console.log(newList);
  };
  return (
    <div className="cards">
      {todos.map((item, index) => (
        <TodoCard todo={item} key={index} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default index;
