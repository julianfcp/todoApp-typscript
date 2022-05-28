import React, { useState } from "react";
import { todoModel } from "../models/todoModel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faCheck, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import "../../App.css";

interface Props {
  todo: todoModel;
  handleEdit: (id: number, e: React.FormEvent, todoEdit: string) => void;
  handleComplete: (id: number) => void;
  handleDelete: (id: number) => void;
}

const Index = ({ todo, handleEdit, handleComplete, handleDelete }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>("");

  return (
    <div className={todo.isDone ? "cards__cardCompleted" : "cards__card"}>
      <div className="cards__card__icons">
        <div
          className="cards__card__icons_i"
          onClick={() => {
            setEdit(!edit);
            setEditTodo(todo.todo);
          }}
        >
          <FontAwesomeIcon icon={faPen} />
        </div>
        <div
          className="cards__card__icons_i"
          onClick={() => {
            handleComplete(todo.id);
          }}
        >
          <FontAwesomeIcon icon={faCheck} />
        </div>
        <div
          className="cards__card__icons_d"
          onClick={() => handleDelete(todo.id)}
        >
          <FontAwesomeIcon icon={faTrashCan} />
        </div>
      </div>
      {edit ? (
        <form
          onSubmit={(e) => {
            handleEdit(todo.id, e, editTodo);
            setEdit(false);
          }}
        >
          <input
            className="cards__card__inputEdit"
            type="text"
            value={editTodo}
            onChange={(e) => setEditTodo(e.target.value)}
          ></input>
        </form>
      ) : (
        todo.todo
      )}
    </div>
  );
};

export default Index;
