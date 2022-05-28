import React from "react";
import { SetStateAction } from "react";
import { todoModel } from "../models/todoModel";
import TodoCard from "../TodoCard";

interface Props {
  todos: todoModel[];
  setTodos: React.Dispatch<SetStateAction<todoModel[]>>;
}

const Index: React.FC<Props> = ({ todos, setTodos }) => {
  const handleDelete = (id: number) => {
    let newList = todos.filter((el) => el.id !== id);
    setTodos(newList);
  };
  const handleComplete = (id: number) => {
    let newList = todos.map((el) => {
      if (el.id === id) {
        return { ...el, isDone: !el.isDone };
      }
      return el;
    });
    setTodos(newList);
  };
  const handleEdit = (id: number, e: React.FormEvent, todoEdit: string) => {
    e.preventDefault();
    let newList = todos.map((el) => {
      if (el.id === id) {
        return { ...el, todo: todoEdit };
      }
      return el;
    });
    setTodos(newList);
  };
  return (
    <div className="cardsCompleted">
      {todos.map((item, index) => {
        if (item.isDone) {
          return (
            <TodoCard
              todo={item}
              key={index}
              handleEdit={handleEdit}
              handleComplete={handleComplete}
              handleDelete={handleDelete}
            />
          );
        } else {
          return "";
        }
      })}
    </div>
  );
};

export default Index;
